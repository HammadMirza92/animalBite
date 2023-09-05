import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('captureElement', { static: false }) captureElement!: ElementRef;



  title = 'animalBite';
  animalBiteForm: FormGroup  = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.selectedDateTime = new Date();
  }
  selectedDateTime: Date;


  ngOnInit(): void {
    this.animalBiteForm = this.formBuilder.group({

      // Top info

      bite:['',Validators.required],
      activity:['',Validators.required],
      DOBMinorOnly:['',Validators.required],

      // Victim information:

      victimName: ['', Validators.required],
      victimAddress: ['', Validators.required],
      victimph:['',Validators.required],
      victimAlt:['',Validators.required],
      victimEmail:['',Validators.required, Validators.email],
      victimIncidentDate:['',Validators.required],
      victimIncidentTime:['',Validators.required],
      vicitimGender: ['',Validators.required],
      victimSchool:['',Validators.required],
      victimAgeInYears:['',Validators.required],
      victimDOB:['',Validators.required],
      victimIsMinor:['',Validators.required],

      // If victim is a minor: (Parent/Guardian)

      vicitimMinorName: ['', Validators.required],
      vicitimMinorAddress: ['', Validators.required],
      vicitimMinorph:['',Validators.required],
      vicitimMinorEmail:['',Validators.required, Validators.email],
      vicitimMinorFamiliarAnimal: ['',Validators.required],
      vicitimMinorTreatment: ['',Validators.required],
      vicitimMinorMedicalFacility: ['',Validators.required],
      vicitimMinorOtherContactPersonPh: ['',Validators.required],

      // Where on victim's body was skin broken?

      isExtremities:['', Validators.required],
      isHeadNeck:['', Validators.required],
      isTorso:['', Validators.required],
      describeWound:['', Validators.required],
      isPunctures:['', Validators.required],
      isLacerations:['', Validators.required],
      isAbrasions:['', Validators.required],
      isSutures:['', Validators.required],
      isWoundRepair:['', Validators.required],
      isCosmetic:['', Validators.required],
      isWildlifeExposure:['', Validators.required],

      // Wound severity

      isMinor:['', Validators.required],
      isModerate:['', Validators.required],
      isSevere:['', Validators.required],
      isUnk:['', Validators.required],

      // Biting animal/potential rabies suspect:

      isDog:['', Validators.required],
      isCat:['', Validators.required],
      isOther:['', Validators.required],
      isWildlifeSpecies:['', Validators.required],
      isWolfHybrid:['', Validators.required],

      // Animal owner information:

      animalOwnerName:['', Validators.required],
      animalOwnerAddress:['', Validators.required],
      animalOwnerPh:['', Validators.required],
      animalOwnerAlt:['', Validators.required],
      animalOwnerEmail:['', Validators.required],
      isNoOwnerOrStray:['', Validators.required],

      // Domestic Animal Info:

      animalName:['',Validators.required],
      animalSex:['',Validators.required],
      animalSpayedOrNeutered:['',Validators.required],
      animalBreedDescription:['',Validators.required],
      animalColor:['',Validators.required],
      animalAge:['',Validators.required],

      // Rabies Vaccination Info:

      unknown:['',Validators.required],
      notVaccinated:['',Validators.required],
      rabiesTag:['',Validators.required],
      vaccinationDate:['',Validators.required],
      vet:['',Validators.required],

      // At time of incident, animal was:

      unrestrainedOFFOwnerProperty:['',Validators.required],
      unrestrainedONOwnerProperty:['',Validators.required],
      restrained:['',Validators.required],

      //  Location of of incident property of:
      locationOfIncident:['',Validators.required],
      locationOther:[''],

      //   Address where incident took place:
      incidentTookPlace:['',Validators.required],

      // Circumstances of incident:
      circumstancesOfIncident:['',Validators.required],


    });
  }

  submitForm(animalBite:any) {
    // Handle form submission logic
    console.log("val is",animalBite)
  }

  consoleDetails() {
    // Handle console details logic
  }

  // generatePDF() {
  //   const element = document.getElementById('pdf-content');

  //   if (element) {
  //     html2canvas(element).then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new (window as any).jsPDF();
  //       pdf.addImage(imgData, 'PNG', 0, 0);
  //       pdf.save('form-data.pdf');
  //     });
  //   } else {
  //     console.error("Element with ID 'pdf-content' not found in the DOM.");
  //   }
  // }

  captureScreenshotAndGeneratePdf() {
    const elementToCapture = this.captureElement.nativeElement;

    if (elementToCapture) {
      html2canvas(elementToCapture).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save('screenshot.pdf');
      });
    } else {
      console.error("Element to capture not found.");
    }
  }


}
