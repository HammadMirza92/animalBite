import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animalBite';
  animalBiteForm: FormGroup  = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.animalBiteForm = this.formBuilder.group({
      //Vicitim
      victimName: ['', Validators.required],
      victimAddress: ['', Validators.required],
      victimph:['',Validators.required],
      victimAlt:['',Validators.required],
      victimEmail:['',Validators.required, Validators.email],
      // victimIncidentDate:['',Validators.required],
      vicitimGender: ['',Validators.required],
      victimSchool:['',Validators.required],
      victimAgeInYears:['',Validators.required],
      // victimDOB:['',Validators.required],
      victimIsMinor:['',Validators.required],

      // Vicitmi Minor

      vicitimMinorName: ['', Validators.required],
      vicitimMinorAddress: ['', Validators.required],
      vicitimMinorph:['',Validators.required],
      vicitimMinorEmail:['',Validators.required, Validators.email],
      vicitimMinorFamiliarAnimal: ['',Validators.required],
      vicitimMinorTreatment: ['',Validators.required],
      vicitimMinorMedicalFacility: ['',Validators.required],
      vicitimMinorOtherContactPersonPh: ['',Validators.required],


    });
  }

  submitForm(animalBite:any) {
    // Handle form submission logic
    console.log("val is",animalBite)
  }

  consoleDetails() {
    // Handle console details logic
  }

  generatePDF() {
    // Handle PDF generation logic
  }

}
