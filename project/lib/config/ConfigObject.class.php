<?php

class ConfigObject extends BaseConfigObject {

    static private $instance = null;
    private $projectMenuName;

    /**
     * @return ConfigObject|null
     */
    static public function getInstance(): ConfigObject {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * @return mixed
     */
    public function getProjectMenuName(): string {
        return $this->projectMenuName;
    }

    /**
     * @param mixed $projectMenuName
     */
    public function setProjectMenuName(string $projectMenuName): void {
        $this->projectMenuName = $projectMenuName;
    }
}