<?php
class Comm {

    public static $HTTP_200_OK = 200;
    public static $HTTP_400_BAD_REQUEST = 400;
    public static $HTTP_401_UNAUTHORIZED = 401;
    public static $HTTP_403_FORBIDDEN = 403;
    public static $HTTP_404_NOT_FOUND = 404;
    public static $HTTP_405_METHOD_NOT_ALLOWED = 405;
    public static $HTTP_429_TOO_MANY_REQUESTS = 429;
    public static $HTTP_500_INTERNAL_SERVER_ERROR = 500;

    /**
     * Returns the given $data array to the browser and calls 'exit(0)'.
     *
     *
     * @param $data
     * @param int $code
     * @param int $option
     */
    public static function sendJSON($data, int $code = 200, int $option = 0): void {

        self::setCode($code);

        header('Content-Type: application/json');
        echo json_encode($data, $option);
        exit(0);
    }

    /**
     * Returns the given raw string to the browser and calls 'exit(0)'.
     *
     * @param $data
     * @param int $code
     * @param null $contentType
     */
    public static function sendRaw($data, int $code = 200, string $contentType = null): void {

        self::setCode($code);

        if ($contentType == null) {
            header('Content-Type: text/plain');
        } else {
            header('Content-Type: '.$contentType);
        }
        echo $data;
        exit(0);
    }

    /**
     *
     *
     * @param int $code
     */
    private static function setCode(int $code): void {

        // get the requesting protocol to answer with the corrent one (to support HTTP/2.0)
        if (isset($_SERVER['SERVER_PROTOCOL'])) {
            $currentProtocol = $_SERVER['SERVER_PROTOCOL'];
        } else {
            $currentProtocol = 'HTTP/1.1'; // fallback
        }

        if ($code != 200) {
            switch ($code) {
                case 400:
                    header($currentProtocol . ' 400 Bad Request', true, 400);
                    break;
                case 401:
                    header($currentProtocol . ' 401 Unauthorized', true, 401);
                    break;
                case 403:
                    header($currentProtocol . ' 403 Forbidden', true, 403);
                    break;
                case 404:
                    header($currentProtocol . ' 404 Not found', true, 404);
                    break;
                case 405:
                    header($currentProtocol . ' 405 Method not allowed', true, 405);
                    break;
                case 500:
                    header($currentProtocol . ' 500 Internal Server Error', true, 500);
                    break;
            }
        }
    }

    /**
     * Convenient helper to get the raw post body of an request.
     *
     * @return false|string
     */
    public static function getPostBody() {
        return file_get_contents('php://input');
    }

}