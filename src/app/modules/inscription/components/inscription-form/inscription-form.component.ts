import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss'],
})
export class InscriptionFormComponent implements OnInit {
  inscriptionForm!: FormGroup;
  title = '#MaConf2020';
  montantTotal = 0;

  data_hebergement = {
    avec_reservation: {
      price: 150,
      label: 'Avec Réservation',
    },
    sans_reservation: {
      price: 0,
      label: 'Sans Réservation',
    },
  };

  data_inscription = {
    etudiant: {
      price: 150,
      label: 'Etudiant',
    },
    academique: {
      price: 200,
      label: 'Académique',
    },
    entreprise: {
      price: 300,
      label: 'Entreprise',
    },
  };

  ngOnInit(): void {
    this.inscriptionForm = new FormGroup({
      firstName: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      sexe: new FormControl(''),
      company: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      pays: new FormControl('', Validators.required),
      code_postal: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      page_web: new FormControl(''),
      page_web_institution: new FormControl(''),
      inscription: new FormControl('', Validators.required),
      hebergement: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const formData = this.inscriptionForm.value;
    const contentError = document.getElementById('content-error');
    contentError && (contentError.innerHTML = '');

    if (this.inscriptionForm.invalid) {
      let content = '';
      document.getElementById('error')?.classList.remove('hide');

      if (!formData.firstName) content += '<li>Prénom obligatoire</li>';
      if (!formData.name) content += '<li>Nom obligatoire</li>';

      if (!formData.email || !/^[\w\.-]+@[\w\.-]+\.\w+$/.test(formData.email))
        content += '<li>Email non validé</li>';

      if (!formData.company) content += '<li>Institution obligatoire</li>';
      if (!formData.address) content += '<li>Adresse obligatoire</li>';
      if (!formData.pays) content += '<li>Pays obligatoire</li>';
      if (!formData.code_postal) content += '<li>Code Postale obligatoire</li>';
      if (!formData.ville) content += '<li>Ville obligatoire</li>';
      if (!formData.inscription) content += '<li> Inscription obligatoire</li>';
      if (!formData.hebergement) content += '<li> Hébergement obligatoire</li>';

      contentError?.insertAdjacentHTML('beforeend', content);
    } else {
      document.getElementById('error')?.classList.add('hide');
      document.getElementById('success')?.classList.remove('hide');

      this.inscriptionForm.disable();
      document.getElementById('submit')?.setAttribute('disabled', 'disabled');

      this.montantTotal =
        Number(formData.hebergement) + Number(formData.inscription);
    }
  }

  onConfirm() {
    document.getElementById('message')?.classList.remove('hide');
    setTimeout(() => {
      this.activateForms();
      this.inscriptionForm.reset();
    }, 1000);
  }

  onUpdate() {
    this.activateForms();
  }

  activateForms() {
    document.getElementById('error')?.classList.add('hide');
    document.getElementById('success')?.classList.add('hide');
    document.getElementById('message')?.classList.add('hide');
    document.getElementById('submit')?.removeAttribute('disabled');
    this.inscriptionForm.enable();
  }
}
