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

}