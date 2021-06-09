<?php

use Monolog\Logger;
use Monolog\Handler\NativeMailerHandler;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Formatter\LineFormatter;

class Log {

    public const DEBUG = Logger::DEBUG;
    public const INFO =  Logger::INFO;
    public const NOTICE = Logger::NOTICE;
    public const WARNING = Logger::WARNING;
    public const ERROR = Logger::ERROR;
    public const CRITICAL = Logger::CRITICAL;
    public const ALERT = Logger::ALERT;
    public const EMERGENCY = Logger::EMERGENCY;

    // one instance per source
    private static $instances = [];
    private $log; // does this work with multiple instances?
    private $level;

    public static function create($source) {
        if (!isset(self::$instances[$source])) {
            self::$instances[$source] = new self($source);
        }
        return self::$instances[$source];
    }

    public function __construct($source) {
        $config = ConfigObject::getInstance();
        $this->level = $config->getMinimumLogLevel();
        $adminEmail = $config->getAdminEmail();

        $formatter = $this->createFormatter();

        $this->log = new Logger($source);
        $handler = new RotatingFileHandler(BASE_DIR.'logs/log.log', 0, $this->level);
        $handler->setFormatter($formatter);
        $this->log->pushHandler($handler);

        // add a email log handler for cirital errors (when using $log->crit() and higher) in production
        if ($adminEmail != null && $config->getDebug() == false) {
            $mailHandler = new NativeMailerHandler($adminEmail, '['.$config->getProjectName().'] Critical error', $config->getMailFrom(), Logger::CRITICAL);
            $mailHandler->setFormatter($formatter);
            $this->log->pushHandler($mailHandler);
        }

    }

    private function createFormatter() {
        // determine the log line of this call
        $dateFormat = "H:i:s";

        // the default output format is "[%datetime%] %channel%.%level_name%: %message% %context% %extra%\n"
        $output = "%datetime% ".(isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'local')." %channel% [%level_name%] %message% %context%\n";

        $formatter = new LineFormatter($output, $dateFormat, true);
        $formatter->ignoreEmptyContextAndExtra(true);
        return $formatter;
    }

    private function callbackHandler($message, $context, $func) {
        if (is_array($message) || is_object($message)) {
            $convertedMessage = print_r($message,true);
        } else {
            $convertedMessage = $message;
        }

        if ($this->level == Log::DEBUG) {
            $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2); // just the last x frames (better performance)
            $index = 1;
            if (isset($trace[$index])) {
                // strip base dir prefix, not needed here. relative path is enough.
                $source = str_replace(BASE_DIR, '', $filepath = $trace[$index]['file'] . ':' . $trace[$index]['line']);
            } else {
                $source = __FILE__;
            }
            $convertedMessage = $source . ' ' . $convertedMessage;
        }
        call_user_func([$this->log, $func], $convertedMessage, $context);
    }

    public function debug($message, array $context = []) {
        $this->callbackHandler($message, $context, 'debug');
    }

    public function info($message, array $context = []) {
        $this->callbackHandler($message, $context, 'info');
    }

    public function notice($message, array $context = []) {
        $this->callbackHandler($message, $context, 'notice');
    }

    public function warn($message, array $context = []) {
        $this->callbackHandler($message, $context, 'warning');
    }

    public function warning($message, array $context = []) {
        $this->callbackHandler($message, $context, 'warning');
    }

    public function error($message, array $context = []) {
        $this->callbackHandler($message, $context, 'error');
    }

    public function critical($message, array $context = []) {
        $this->callbackHandler($message, $context, 'critical');
    }

    // to keep compatibility with log4php
    public function fatal($message, array $context = []) {
        $this->callbackHandler($message, $context, 'alert');
    }

    public function alert($message, array $context = []) {
        $this->callbackHandler($message, $context, 'alert');
    }

    public function emerg($message, array $context = []) {
        $this->callbackHandler($message, $context, 'emerg');
    }

}