<?php 

// Passage d'un objet par référence en PHP 5
// Script PHP permettant de vérifier si l'email de l'étudiant est valide
	
	class Etudiant {

		private $nom;
		private $prenom;
		private $email;
		private $âge;

		public function __construct ($nomEtu, $prenomEtu, $emailEtu, $ageEtu) {
			$this->nom = $nomEtu;
			$this->prenom = $prenomEtu;
			$this->email = $emailEtu;
			$this->âge = $ageEtu;
		}

		public function emailisvalide ($email) {
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
				echo "Votre email n'est pas valide";
			}else{
				$this->email = $email;
			}
		}
	}

	$userinfo = new Etudiant('Faye', 'Mamadou', 'fayem7409@gmail.com', 22);
	myEmail($userinfo);
	print_r($userinfo);

	function myEmail ($obj) {
		$obj->emailisvalide('mamadou.faye18@gmail.com');
	}


?>