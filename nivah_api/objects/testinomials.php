<?php
    class Testinomials {
        // database configurations
        private $conn;
        private $table_name = "testinomials";

        public $id;
        public $client_name;
        public $description;
        public $img_name;
        public $img_ext;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function read() {
            $query = "SELECT * FROM ".$this->table_name;
            $stmt = $this->conn->prepare($query);

            $stmt->execute();
            return $stmt;
        }
        public function readOne() {
            $query = "SELECT * FROM ".$this->table_name." WHERE id=".$this->id;
            $stmt = $this->conn->prepare($query);

            $stmt->execute();
            return $stmt;
        }

        public function create() {
            $query = "INSERT INTO ".$this->table_name
                ." (client_name, description, img_name, img_ext)
                VALUES (?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);

            if($stmt->execute([$this->client_name, $this->description, $this->img_name, $this->img_ext])) {
                return true;
            }
            return false;
        }

        public function delete() {
            $query = "DELETE FROM ".$this->table_name
                ." WHERE id=".$this->id;
            $stmt = $this->conn->prepare($query);

            if($stmt->execute()) {
                return true;
            }
            return false;
        }

    }
 ?>
