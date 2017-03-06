<button id='pop'>Afficher popup</button>
<div id="popup" class="">
	<?php	include ("controller/get_methods.php"); ?>
	<button id="close">Fermer</button>
		<?php foreach ($result as $row) :?>
		<div class='planetdata'>
			<img src=''>
			<p id='id'><span id='idplanet'><?= $row->id ?></span></p>
			<p>Nom :<span id='nom'><?= $row->nom ?></span></p>
			<p>Année de découverte : <span id='annee'><?= $row->discovered ?></span></p>
			<p>Méthode de détection : <span id='methode'><?= $row->detection_type ?></span></p>
			<p>Système stellaire : <span id='systeme'><?= $row->star_name ?></span></p>
			<?php $sister = $planete->getSameStarPlanete($row->star_name); ?>
			<p>Planète(s) soeur(s)</p>
			<?php foreach ($sister as $sis) :?>

				<p><?= $sis->nom ?></p>
			<?php endforeach; ?>

			<p>Masse : <span id='masse'><?= $row->mass ?> M(jupiter)</span></p>
			<p>Rayon : <span id='rayon'><?= $row->radius ?> R(jupiter)</span></p>
			<p>Période orbitale : <span id='periode'><?= $row->orbital_period ?></span></p>
			<p>Température
			<?php if($row->temp_calculated != '0'){ ?>

				calculée : <span id='tcalc'><?= $row->temp_calculated ?>K</span></p>

			<?php }elseif($row->temp_measured != '0') { ?>

				mesurée : <span id='tmes'><?= $row->temp_measured ?>K</span></p>
			<?php }else{?>
				: Non défini </p>
			<?php }?>

			<p>Molécules détectées : <span id='molecules'><?= $row->molecules ?></span></p>

		</div>
		<div class='stardata'>
			<p>Nom : <span id='starnom'><?= $row->star_name ?></span></p>
			<p>Distance planète-étoile : <span id='distance'><?= $row->star_distance ?> parsec(s)</span></p>
			<p>Age : <span id='starage'><?= $row->star_age ?> Ga</span></p>
			<p>Masse : <span id='starmasse'><?= $row->star_mass ?> M(soleil)</span></p>
			<p>Rayon : <span id='starrayon'><?= $row->star_radius ?> R(soleil)</span></p>
			<p>Température : <span id='startemp'><?= $row->star_teff ?> K</span></p>
			<p>Type spectral : <span id='type'><?= $row->star_sp_type ?> K<span></p>
		<button id='next' id_next="<?=$row->id+1?>">Planète Suivante</button>
		<button id='prev' id_prev="<?=$row->id-1?>">Planète Précédente</button>
		</div>
		<?php endforeach; ?>
</div>