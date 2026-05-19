import { Component, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";




@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about-component.html',
  styleUrls: ['./about-component.scss']
})
export class AboutComponent {
  private http = inject(HttpClient);

  /**
   * Scrolls to the projects section
   */
  scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Downloads the CV as a PDF file
   * Currently triggers a download of Maheshwari's resume/CV
   */
  downloadCV(): void {
    const cvFileName = 'resume.pdf';
    const cvPath = '/assets/cv/resume.pdf';

    // Fetch the file as a blob and trigger download
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = cvFileName; // file name when downloading
    link.click();
  }

  /**
   * Opens a full preview of the CV in a new window or modal
   * Can be extended to display CV in an embedded PDF viewer
   */
  openCVPreview(): void {
    const cvPath = 'assets/cv/resume.pdf';
    
    // Open CV in a new window
    window.open(cvPath, '_blank', 'width=900,height=700');
    
    console.log('CV preview opened');
  }

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