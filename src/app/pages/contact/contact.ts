import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = false;
  feedbackMessage = '';
  private readonly fb = inject(FormBuilder);

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['ventas', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    this.submitted = true;
    this.feedbackMessage = '';

    if (this.contactForm.invalid) {
      return;
    }

    const { name, email, subject, message } = this.contactForm.getRawValue();
    const subjectMap: Record<string, string> = {
      ventas: 'Consulta comercial',
      taller: 'Solicitud de cita de taller',
      recambios: 'Consulta de accesorios y recambios',
      otros: 'Consulta general',
    };

    const mailSubject = `[Web Motos S.L.] ${subjectMap[subject] ?? 'Consulta'}`;
    const mailBody = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Asunto: ${subjectMap[subject] ?? subject}`,
      '',
      message,
    ].join('\n');

    const mailtoUrl = `mailto:contacto@motossl.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoUrl;
    this.feedbackMessage = 'Se ha abierto tu cliente de correo para terminar el envio.';
    this.contactForm.reset({
      name: '',
      email: '',
      subject: 'ventas',
      message: '',
    });
    this.submitted = false;
  }

  hasError(controlName: 'name' | 'email' | 'subject' | 'message', errorName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.hasError(errorName) && (control.touched || this.submitted);
  }

}
