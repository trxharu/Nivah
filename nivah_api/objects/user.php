<?php
    class User {
        // database configurations
        private $conn;
        private $table_name = "test";

        public $id;
        public $username;
        public $passkey;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function create() {
            $query = "INSERT INTO " . $this->table_name . " (username, password)" ."
                        VALUES (?, ?)";
            $stmt = $this->conn->prepare($query);

            // sanitize the values
            $this->username = htmlspecialchars(strip_tags($this->username));
            $this->passkey = htmlspecialchars(strip_tags($this->passkey));

            $password_hash = password_hash($this->passkey, PASSWORD_BCRYPT);

            if($stmt->execute([$this->username, $password_hash])) {
                return true;
            }
            return false;
        }

        public function userExists() {
            $query = "SELECT * FROM " . $this->table_name . "
                        WHERE username = ?
                        LIMIT 0, 1";
            $stmt = $this->conn->prepare($query);

            $this->username = htmlspecialchars(strip_tags($this->username));
            $stmt->execute([$this->username]);

            if($stmt->rowCount() > 0) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                $this->id = $row['id'];
                $this->username = $row['username'];
                $this->passkey = $row['password'];
                return true;
            }

            return false;
        }
    }
 ?>
