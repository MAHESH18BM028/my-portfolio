import { Component } from "@angular/core";







@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer-component.html',
})
export class FooterComponent {


   /**
   * Opens email client with email pre-filled
   */
  sendEmail(): void {
    const email = 'maheshwari252000@gmail.com';
    const link = document.createElement('a');
    link.href = `mailto:${email}`;
    link.click();
  }

  /**
   * Opens LinkedIn profile in a new window
   */
  openLinkedIn(): void {
    const linkedInURL = 'https://www.linkedin.com/in/maheshwari-ponraj-6b95731a2';
    window.open(linkedInURL, '_blank');
  }

  /**
   * Opens GitHub profile in a new window
   */
  openGitHub(): void {
    const gitHubURL = 'https://github.com'; // Mock GitHub URL - will be updated with actual profile
    window.open(gitHubURL, '_blank');
  }


}