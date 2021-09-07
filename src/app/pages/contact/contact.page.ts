import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  templateUrl: 'contact.page.html'
})
export class ContactPage {

  checkoutForm = this.formBuilder.group({
    email: [null, Validators.required],
    name: '',
    message: ''
  });

  constructor(
    private formBuilder: FormBuilder) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your message has been submitted');
    console.warn(this.checkoutForm.value);
    const reqObject = this.checkoutForm.value;

    // this.emailService.sendMessage(reqObject).subscribe(data => {
    //   console.log(data);
    // }, (error => {
    //   console.log(error);
    // }));
    this.checkoutForm.reset();
  }
}
