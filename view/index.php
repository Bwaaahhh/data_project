<div class="container">
	<div class="presentation">
		<div class="row justify-content-center">
			<p>Bienvenue Voyageur, tu pourras à travers ce site découvrir ou redécouvrir les exo-planètes
			recencées.</p>
		</div>
		<div class="row justify-content-center">
			<p>Si tu veux te laisser guider dans l'immensitée de l'espace c'est par  <button id='pop' class="ici">ICI</button></p>
		</div>
		<div class="row justify-content-center">
			<p>Pour mieux comprendre les données qui te sont présentées, tu peux consulter le lexique :<img id='lexic' class="" src='view/images/lexique.png'/></p>
		</div>
		<div class="row justify-content-center">
			<p>Tu peux aussi affiner tes recherches en nous disant les planètes que tu préfères voir. </p>
		</div>
		<div class="row justify-content-center">
			<p id="choixSelect">Tu as choisi <span id="methodde"></span><span id="multiSelect"></span><span id="selectt"></span></p>
		</div>



<!-- ////////////////////////////////    RECHERCHE PAR FILTRE     ///////////////////////////////////////////////-->



		<div class="selectionParametre">
			<div class="row">
				<div class="parametre col-md-2 par">
					<p class="facteur" id="facteurMasse">Par masse</p>
					<img class="plus" select="poidDesc" id="imagePoid" src="view/images/kilo.png" alt="">
					<img class="moins" select="poidAsc" id="imagePlume" src="view/images/plume.png" alt="">
				</div>
				<div class="parametre col-md-1 par">
					<p class="par">ou</p>
				</div>
				<div class="parametre col-md-2 par">
					<p class="facteur" id="facteurTemp">Par Température</p>
					<img class="plus" select="tempDesc" id="imageChaud" src="view/images/chaleur.png" alt="">
					<img class="moins" select="tempAsc" id="imageFroid" src="view/images/flocon.png" alt="">
				</div>
				<div class="parametre col-md-1 par">
					<p class="par">ou</p>
				</div>
				<div class="parametre col-md-2 par">
					<p class="facteur" id="facteurAnnee">Par année de découverte</p>
					<img class="plus" select="anneeDesc" id="imageVieux" src="view/images/dino.png" alt="">
					<img class="moins" select="anneeAsc" id="imageJeune" src="view/images/alien.png" alt	="">
				</div>
				<div class="parametre col-md-1">
					<p class="par">et / ou</p>
				</div>
				<div class="parametre col-md-2 par">
					<p class="facteur" id="methodeRecherche">Par méthode de découverte</p>
					<p methode="Primary" class="pMethodeRecherche">Transit</p>
					<p methode="Radial" class="pMethodeRecherche">Vitesse Radiale</p>
					<p methode="Imaging" class="pMethodeRecherche">Microlentille Gravitationnelle</p>
				</div>
			</div>
			<div class="row justify-content-center">
				<form class="" action="" method="post" id="formSelect">
					<input type="hidden" name="select" value="" id="select"/>
					<input type="hidden" name="methode" value="" id="methode"/>
					<input type="hidden" name="count" value="" id="count" />
					<button class="buttonRecherche" type="button" name="button" id='annulerRecherche'>Annuler la sélection de recherche</button>
					<button class="buttonRecherche" type="submit" name="selection" id="selection">Envoyer</button>
				</form>
			</div>
		</div>
	</div>




<!--////////////////////////////////// POP UP ET APPEL DE LA PREMIERE METHODE /////////////////////////////////////-->




<div id="popup" class="">
	<?php	include ("controller/getMethods.php"); ?>
	<img id="close" src='view/images/close.png'>
		<?php foreach ($result as $row) :?>
		<div class='planetdata'>
			<div class='row'>
					<div class='offset-md-1 col-md-4' id='picture'>
						<img id="image" src="view/images/<?= $image->picturename ?>" />
					</div>
					<div class='data1 offset-md-1 col-md-6'>
					<p id='id'><span id='idplanet'><?= $row->id ?></span></p>
					<p>Nom : <span id='nom'><?= $row->nom ?></span></p>
					<p>Année de découverte : <span id='annee'><?= $row->discovered ?></span></p>
					<p>Méthode de détection : <span id='methodeeee'><?= $row->detection_type ?></span></p>
					<p>Système stellaire : <span id='systeme'><?= $row->star_name ?></span></p>
					<?php $sister = $planete->getSameStarPlanete($row->star_name); ?>
					<p>Planète(s) soeur(s) :</p>
					<?php foreach ($sister as $sis) :?>

						<p><span id='samestarplanets'<?= $sis->nom ?></p>
					<?php endforeach; ?>
					</div>
			</div>
			<div class='data2 row'>
				<div class='planets offset-md-1 col-md-5'>
				<p class='titre'>Données planétaires</p>
					<p>Masse
					<?php if($row->mass != 0){ ?>
					: <span id='masse'><?= $row->mass ?></span> M(jupiter)</p>
					<?php }else{?>
						: <span id="masse" class='nd' >< 1</span> M(jupiter)</p>
					<?php }?>
					<p>Rayon
					<?php if($row->radius != '0'){ ?>
					<span id='rayon'><?= $row->radius ?></span> R(jupiter) </p>
					<?php }else{?>
						: <span id='rayon' class='nd' >< 1  </span> R(jupiter) </p>
					<?php }?>
					<p>Période orbitale : <span id='periode'><?= $row->orbital_period ?></span> année(s)</p>
					<p>Température
					<?php if($row->temp_calculated != '0'){ ?>

						calculée : <span id='tcalc'><?= $row->temp_calculated ?></span> K</p>

					<?php }elseif($row->temp_measured != '0') { ?>

						mesurée : <span id='tcalc'><?= $row->temp_measured ?></span> K</p>
					<?php }else{?>
						: <span id='tcalc' class='nd' >Non défini</span> K</p>
					<?php }?>

					<p>Molécules détectées
					<?php if($row->molecules != ""){ ?>
						: <span id='molecules'><?= $row->molecules ?></span></p>
					<?php }else{?>
						: <span id='molecules' class='nd' >Non défini</span></p>
					<?php }?>
				</div>
				<div class='col-md-6'>
					<div class='stardata'>
					<p class='titre'>Données stellaires</p>
					<p>Nom de l'étoile : <span id='starnom'><?= $row->star_name ?></span></p>
					<p>Distance planète-étoile : <span id='distance'><?= $row->star_distance ?></span> parsec(s)</p>
					<p>Age
					<?php if($row->star_age != '0'){ ?>
					: <span id='starage'><?= $row->star_age ?></span> Ga</p>
					<?php }else{?>
						: <span id='starage' class='nd' >Non défini</span> Ga</p>
					<?php }?>
					<p>Masse
					<?php if($row->star_mass != '0'){ ?>
					: <span id='starmasse'><?= $row->star_mass ?></span> M(soleil)</p>
					<?php }else{?>
						: <span id='starmasse' class='nd' >< 1</span> M(soleil)</p>
					<?php }?>
					<p>Rayon
					<?php if($row->star_radius != '0'){ ?>
					: <span id='starrayon'><?= $row->star_radius ?> </span> R(soleil)</p>
					<?php }else{?>
						: <span id='starrayon' class='nd' >< 1</span> R(soleil)</p>
					<?php }?>
					<p>Température de l'étoile
					<?php if($row->star_teff != '0'){ ?>
						: <span id='startemp'><?= $row->star_teff ?> </span> K</p>
					<?php }else{?>
						: <span id='startemp' class='nd' >Non défini</span></p>
					<?php }?>
					<p>Type spectral
					<?php if($row->star_sp_type != ""){ ?>
						: <span id='type'><?= $row->star_sp_type ?> <span></p>
					<?php }else{?>
						: <span id='type' class='nd' >Non défini</span></p>
					<?php }?>
					</div>
				</div>
			</div>
		</div>
		<div class='row'>
			<div class='col-md-2'>
				<img id='prev' id_prev="<?=$row->id-1?>" src='view/images/prev_button.png'/>
				<p class='prevbutton'>Précédent</p>
			</div>
			<div class='offset-md-8 col-md-2'>
				<img id='next' id_next="<?=$row->id+1?>" src='view/images/next_button.png'/>
				<p class='nextbutton'>Suivant</p>
			</div>
		</div>
		<?php endforeach; ?>
</div>


<!-- ///////////////////////////////       DIV DE PRESENTATION      /////////////////////////////////  -->


<div id='poplexique'>
<img id="closelexique" src='view/images/close.png'>
<h2>Lexique</h2>
<p><span>M(soleil) :</span> Masse du soleil, soit 1,9891×10^30 kg.</p>
<p><span>R(soleil) :</span> Rayon du soleil, soit 695 700 km.</p>
<p><span>M(soleil) :</span> Masse de Jupiter, soit 1,898×10^27 kg.</p>
<p><span>R(soleil) :</span> Rayon de Jupiter, soit 69 911 km.</p>

<p><span>Méthodes de découverte :</span>
Actuellement, il existe plusieurs méthodes pour pouvoir détecter les exoplanètes.</p>

<p><span class='soustitre'>Radial Velocity (Vitesse radiale) : </span>
C'est la méthode qui a permis de découvrir la plupart des exoplanètes connues. Cette méthode consiste à mesurer, grâce à un spectrographe, l'éloignement ou le rapprochement d'une étoile dû à la présence d'une planète orbitant autour.</p>
<p><span class='soustitre'>Transit : </span>
Cette méthode consiste à mesurer la luminosité d'une étoile. Si celle-ci baisse de façon périodique, cela peut supposer la présence d'une planète, qui occulte régulièrement cette luminosité lors de son passage devant l'étoile.</p>
<p><span class='soustitre'>Microlentilles gravitationnelles (Microlensing / Imaging) : </span>
Méthode permettant de découvrir les planètes grace aux microlentilles gravitionnelles, phénomène physique qui découle de la déviation de la lumière due à la présence d'un corps à fort champ gravitationnel.</p>
<p><span>Période orbitale : </span>
Temps nécessaire à une planète pour effectuer une orbite complète autour de son étoile.</p>
<p> <span>Type spectral : </span>
Indice en fonction de la couleur et de la température de l'étoile.
Dans l'ordre, de la plus chaude à la plus froide (du bleu au rouge en passant par le blanc) :
O, B, A, F, G, K, M, L, T, Y.</p>
</div>
