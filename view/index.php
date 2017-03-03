<button id='pop'>Afficher popup</button>
<div id="popup" class="">
	<?php	include ("controller/get_methods.php"); ?>
	<button id="close">Fermer</button>
		<?php foreach ($result as $row) :?>
		<div class='planetdata'>
			<img src=''>
			<p>Nom :<?= $row->nom ?></p>
			<p>Année de découverte : <?= $row->discovered ?></p>
			<p>Méthode de détection : <?= $row->detection_type ?></p>
			<p>Système stellaire : <?= $row->star_name ?></p>
			<?php $sister = $planete->getSameStarPlanete($row->star_name); ?>
			<p>Planète(s) soeur(s)</p>
			<?php foreach ($sister as $sis) :?>

				<p><?= $sis->nom ?></p>
			<?php endforeach; ?>

			<p>Masse : <?= $row->mass ?> M(jupiter)</p>
			<p>Rayon : <?= $row->radius ?> R(jupiter)</p>
			<p>Période orbitale : <?= $row->orbital_period ?></p>
			<p>Température
			<?php if($row->temp_calculated != '0'){ ?>

				calculée : <?= $row->temp_calculated ?>K</p>

			<?php }elseif($row->temp_measured != '0') { ?>

				mesurée : <?= $row->temp_measured ?>K</p>
			<?php }else{?>
				: Non défini </p>
			<?php }?>

			<p>Molécules détectées : <?= $row->molecules ?></p>

		</div>
		<div class='stardata'>
			<p>Nom : <?= $row->star_name ?></p>
			<p>Distance planète-étoile : <?= $row->star_distance ?> parsec(s)</p>
			<p>Age : <?= $row->star_age ?> Ga</p>
			<p>Masse : <?= $row->star_mass ?> M(soleil)</p>
			<p>Rayon : <?= $row->star_radius ?> R(soleil)</p>
			<p>Température : <?= $row->star_teff ?> K</p>
			<p>Type spectral : <?= $row->star_sp_type ?> K</p>
		<?php endforeach; ?>
		<?php foreach ($result as $row) :
		$next = $planete->getNextPlanete();	?>
		<button id='next' href="index.php?planet="<?=$row->nom?>>Planète Suivante</button>
		<?php endforeach;
		foreach ($result as $row) :
		$prev = $planete->getPrevPlanete();
		?>
		<button id='prev' href="index.php?planet="<?=$row->nom?>>Planète Précédente</button>
		<?php endforeach;?>
		</div>
<?php require ('view/js/ajax.js');?>
</div>