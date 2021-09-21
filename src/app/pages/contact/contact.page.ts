import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmailService} from '../../services/email.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {EmailNodeService} from '../../services/email-node.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FestivalSnackbarComponent} from '../../shared/snacbar/festival-snackbar.component';


@Component({
  templateUrl: 'contact.page.html'
})
// tslint:disable-next-line:component-class-suffix
export class ContactPage {

  loading: boolean = false;
  checkoutForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    name: '',
    message: ''
  });

  constructor(
    private formBuilder: FormBuilder, private emailService: EmailService,
    private nodeMail: EmailNodeService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar) {
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
    if (this.checkoutForm.valid) {
      this.loading = true;
      const reqObject = this.checkoutForm.value;

      this.nodeMail.sendMessage(reqObject).subscribe(data => {
        this.loading = false;
        this.snackBar.openFromComponent(FestivalSnackbarComponent, {
          duration: 5 * 1000,
        });
      }, (error => {
        this.loading = false;
      }));
      this.checkoutForm.reset();
    }
  }
}
