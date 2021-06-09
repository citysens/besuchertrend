<?php 

class Util {

    /**
     * @param null $source
     * @return Log|Logger
     */
    public static function getLogger($source = null) {
        return Log::create($source ?? 'Cortex');
    }
        
    public static function redirect($path, $scheme = null){

        // we need to get the value from the ConfigObject class, because else we woudl only get the default framework value.
        // for safety reasons, check if this class exists. Else, fallback to default.
        if (class_exists('ConfigObject')) {
            $config = ConfigObject::getInstance();
        } else {
            $config = BaseConfigObject::getInstance();
        }

        // safety check
        if ($scheme != null && ($scheme != 'http' || $scheme != 'https')) {
            Util::getLogger()->error('Unknown scheme found: ' . $scheme . '. Falling back to value from config.');
            $scheme = $config->getDefaultScheme();
        }

        // of no scheme is given as a parameter, use the scheme defined in the config (default: 'https')
        // -> this means that the function parameter can be used to overwrite the config.
        if ($scheme == null) {
            $scheme = $config->getDefaultScheme();
        }

        if(substr($path,0,1) != "/") {
            $path = "/" . $path;
            if ($config->getDebug()) {
                Util::getLogger()->error("Redirect to Path without leading /: " . $path . '. Adding /.');
            }
        }
        header("Location:".$scheme."://{$_SERVER['SERVER_NAME']}$path");

        exit(); // never remove this!
    }
}
