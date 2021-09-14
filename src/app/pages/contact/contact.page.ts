import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmailService} from '../../services/email.service';

@Component({
  templateUrl: 'contact.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class ContactPage {

  checkoutForm = this.formBuilder.group({
    email: [null, Validators.required],
    name: '',
    message: ''
  });

  constructor(
    private formBuilder: FormBuilder, private emailService: EmailService) {
  }

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
    // this.checkoutForm.reset();
  }


}
