<?php
    class ListFilesNames {

        private $pathDir;
        private $tipo;
        
        public function __construct($pathDir, $tipo='') {
            $this->pathDir = $pathDir;
            $this->tipo = $tipo;
        }

        public function getPath() {
            return $this->pathDir;
        }

        public function getTipo() {
            return $this->tipo;
        }

        public function getLista(){
            $dir = opendir($this->pathDir);

            while ( false !== ($filename = readdir($dir))) {
                if("." != $filename && ".." != $filename && $filename != "index.php" && $filename != "Thumbs.db"){
                    $arquivos[] = $filename;
                }
            }
            #$dir->closedir();
            rsort($arquivos);
            return $arquivos;

        }
    }
?>