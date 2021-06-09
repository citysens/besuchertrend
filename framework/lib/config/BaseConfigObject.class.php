<?php

class BaseConfigObject {

    static private $instance = null;
    private $debug = false;

    private $basePath;
    private $projectName;
    private $defaultScheme = 'https';

    private $modernLogger = false; // default value is false
    private $minimumLogLevel;
    private $adminEmail;

    /**
     * @return BaseConfigObject|null
     */
    static public function getInstance(){
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }

    /**
     * @return bool
     */
    public function getDebug(): bool {
        return $this->debug;
    }

    /**
     * @param bool $debug
     */
    public function setDebug(bool $debug): void {
        $this->debug = $debug;
    }

    /**
     * @return mixed
     */
    public function getBasePath() {
        return $this->basePath;
    }

    /**
     * @param mixed $basePath
     */
    public function setBasePath($basePath): void {
        $this->basePath = $basePath;
    }

    /**
     * @return mixed
     */
    public function getProjectName() {
        return $this->projectName;
    }

    /**
     * @param mixed $projectName
     */
    public function setProjectName($projectName): void {
        $this->projectName = $projectName;
    }

    /**
     * @return string
     */
    public function getDefaultScheme(): string {
        return $this->defaultScheme;
    }

    /**
     * @param string $defaultScheme
     */
    public function setDefaultScheme(string $defaultScheme): void {
        $this->defaultScheme = $defaultScheme;
    }

    /**
     * @return bool
     */
    public function getModernLogger(): bool {
        return $this->modernLogger;
    }

    /**
     * @param bool $modernLogger
     */
    public function setModernLogger(bool $modernLogger): void {
        $this->modernLogger = $modernLogger;
    }

    /**
     * @return mixed
     */
    public function getMinimumLogLevel() {
        return $this->minimumLogLevel;
    }

    /**
     * @param mixed $minimumLogLevel
     */
    public function setMinimumLogLevel($minimumLogLevel): void {
        $this->minimumLogLevel = $minimumLogLevel;
    }

    /**
     * @return mixed
     */
    public function getAdminEmail() {
        return $this->adminEmail;
    }

    /**
     * @param mixed $adminEmail
     */
    public function setAdminEmail($adminEmail): void {
        $this->adminEmail = $adminEmail;
    }

}
