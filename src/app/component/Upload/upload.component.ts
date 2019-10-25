import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'upload-root',
  templateUrl: './upload.component.html'
   
})
export class UploadComponent {
 values : any ;

 public files: any[];


 constructor(private http : HttpClient )
    { this.files = []; }
 

onFileChanged(event: any) {
  this.files = event.target.files;
}

onUpload() {
  const formData = new FormData();
  for (const file of this.files) {
      formData.append(name, file, file.name);
  }
  this.http.post('https://localhost:44389/api/values', formData).subscribe(   data => console.log('success'),
  error => console.log(error)
   
    
    );
}
}
 

   
 
