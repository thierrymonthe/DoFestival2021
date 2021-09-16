import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmailService} from '../../services/email.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';


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
    private formBuilder: FormBuilder, private emailService: EmailService,
    private httpClient: HttpClient) {
  }

  sendEmail(): void {
    const formValue = this.checkoutForm.value;
    const fromEmail: string = environment.emailConfig.from;
    const emailSubject: string = 'Message Subject';
    const apiKey = environment.emailConfig.apiKey;

    const emailModel = {
      personalizations:
        [
          {to: [{email: formValue.email}]}
        ],
      from: {email: fromEmail},
      subject: emailSubject,
      content: [{type: 'text/plain', value: formValue.message}]
    };

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${apiKey}`)
      .set('Content-Type', 'application/json');

    console.log(emailModel);
    console.log('Email body: ');
    console.log(emailModel);

    this.httpClient.post('https://api.sendgrid.com/v3/mail/send', emailModel, {headers});
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
