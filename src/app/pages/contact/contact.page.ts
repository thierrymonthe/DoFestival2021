import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmailService} from '../../services/email.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {EmailNodeService} from '../../services/email-node.service';


@Component({
  templateUrl: 'contact.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class ContactPage {

  loading: boolean = false;
  checkoutForm = this.formBuilder.group({
    email: [null, Validators.required],
    name: '',
    message: ''
  });

  constructor(
    private formBuilder: FormBuilder, private emailService: EmailService,
    private nodeMail: EmailNodeService,
    private httpClient: HttpClient) {
  }

  sendEmail(): void {
    const formValue = this.checkoutForm.value;

    const fromEmail: string = formValue.email;
    const emailSubject: string = 'User message';
    const apiKey = environment.emailConfig.apiKey;

    const emailModel = {
      personalizations:
        [
          {to: environment.emailConfig.to}
        ],
      from: {email: fromEmail},
      subject: emailSubject,
      content: [{type: 'text/plain', value: formValue.message}]
    };

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${apiKey}`)
      .set('Content-Type', 'application/json');

    console.log(formValue);
    console.log('Email body: ');
    console.log(emailModel);

    this.httpClient.post('https://api.sendgrid.com/v3/mail/send', emailModel, {headers}).subscribe(() => {
      console.log('Le message a été envoyé !');
    });
  }

  onSubmit(): void {
    this.loading = true;
    // Process checkout data here
    console.warn('Your message has been submitted');
    console.warn(this.checkoutForm.value);
    const reqObject = this.checkoutForm.value;

    this.nodeMail.sendMessage(reqObject).subscribe(data => {
      console.log(data);
      this.loading = false;

    }, (error => {
      console.log(error);
      this.loading = false;
    }));
    this.checkoutForm.reset();
  }


}
