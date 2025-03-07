import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  showDemoModal = false;
  demoForm: FormGroup;
  selectedDate: Date = new Date();
  availableTimes: string[] = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
  selectedTime: string = '';
  isSubmitting = false;
  submitError = '';
  submitSuccess = false;
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.demoForm = this.fb.group({
      name: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      emailId: ['', [Validators.email]],
      mobileNo: ['', [Validators.pattern('^[0-9]{10}$')]],
      designation: [''],
      scheduleDateTime: ['', [Validators.required]]
    }, {
      validators: this.emailOrMobileValidator
    });
  }
  
  // Custom validator to ensure either email or mobile is provided
  emailOrMobileValidator(group: FormGroup) {
    const emailId = group.get('emailId')?.value;
    const mobileNo = group.get('mobileNo')?.value;
    
    return (emailId || mobileNo) ? null : { emailOrMobileRequired: true };
  }
  
  openDemoModal() {
    this.showDemoModal = true;
    this.submitSuccess = false;
    this.submitError = '';
  }
  
  closeDemoModal() {
    this.showDemoModal = false;
    this.demoForm.reset();
    this.selectedDate = new Date();
    this.selectedTime = '';
    this.submitError = '';
  }
  
  selectDate(date: Date) {
    this.selectedDate = date;
    this.updateScheduleDateTime();
  }
  
  selectTime(time: string) {
    this.selectedTime = time;
    this.updateScheduleDateTime();
  }
  
  updateScheduleDateTime() {
    if (this.selectedDate && this.selectedTime) {
      // Parse the time string to get hours and minutes
      let hours = 0;
      let minutes = 0;
      
      const timeParts = this.selectedTime.match(/(\d+):(\d+) (AM|PM)/);
      if (timeParts) {
        hours = parseInt(timeParts[1]);
        minutes = parseInt(timeParts[2]);
        
        // Convert to 24-hour format
        if (timeParts[3] === 'PM' && hours < 12) {
          hours += 12;
        } else if (timeParts[3] === 'AM' && hours === 12) {
          hours = 0;
        }
      }
      
      // Create a new date object with the selected date and time
      const scheduleDateTime = new Date(this.selectedDate);
      scheduleDateTime.setHours(hours, minutes, 0, 0);
      
      // Format as ISO string and update form control
      this.demoForm.patchValue({ 
        scheduleDateTime: scheduleDateTime.toISOString() 
      });
    }
  }
  
  submitDemoRequest() {
    if (this.demoForm.valid) {
      this.isSubmitting = true;
      this.submitError = '';
      
      const apiUrl = 'https://pulse.appcarter.com/nexusNode/apis/user/doRegistration';
      const requestBody = {
        name: this.demoForm.get('name')?.value,
        companyName: this.demoForm.get('companyName')?.value,
        emailId: this.demoForm.get('emailId')?.value,
        mobileNo: this.demoForm.get('mobileNo')?.value,
        designation: this.demoForm.get('designation')?.value,
        scheduleDateTime: this.demoForm.get('scheduleDateTime')?.value
      };
      
      this.http.post(apiUrl, requestBody).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          this.isSubmitting = false;
          this.submitSuccess = true;
          setTimeout(() => {
            this.closeDemoModal();
          }, 3000);
        },
        error: (error) => {
          console.error('Registration failed:', error);
          this.isSubmitting = false;
          this.submitError = 'Failed to register. Please try again later.';
        }
      });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.demoForm.markAllAsTouched();
      
      // Check if the emailOrMobileRequired validator failed
      if (this.demoForm.hasError('emailOrMobileRequired')) {
        this.submitError = 'Please provide either Email or Mobile number.';
      }
    }
  }
  
  // Helper method to generate calendar days
  getDaysInMonth(year: number, month: number): Date[] {
    const days: Date[] = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Add days from the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  }
  
  getCurrentMonthDays(): Date[] {
    const year = this.selectedDate.getFullYear();
    const month = this.selectedDate.getMonth();
    return this.getDaysInMonth(year, month);
  }
  
  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  }
  
  isPastDate(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }
  
  formatMonth(date: Date): string {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  }
  
  nextMonth() {
    this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 1);
  }
  
  prevMonth() {
    this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() - 1, 1);
  }
}