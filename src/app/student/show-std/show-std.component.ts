import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-std',
  templateUrl: './show-std.component.html',
  styleUrls: ['./show-std.component.css']
})
export class ShowStdComponent {
  constructor(private service:SharedService){}

  Studentlist:any=[];

  ModalTitle:any;
  ActiveAddEditComp:boolean=false;
  std:any;


  ngOnInit():void{
    this.refreshStdList();
  }

  addclick(){
    this.std={
      studentid:0,
      studentname:"",
      studentage:"",
      studentplace:""
    };
    this.ModalTitle="Add new Student";
    this.ActiveAddEditComp=true;
  }

editcilck(dataid:any){
  this.std=dataid
  this.ModalTitle="Edit Student"
  this.ActiveAddEditComp=true
}

deleteclick(dataid:any){
  if(confirm("are you sure ?")){
    this.service.Deletestd(dataid.studentid).subscribe(data=>{
      alert(data.toString())
      this.refreshStdList()
    })
  }
}

  closeclick(){
    this.ActiveAddEditComp=false;
    this.refreshStdList();
  }

  refreshStdList(){
    this.service.Getstdlist().subscribe(data=>{
      this.Studentlist=data
    })
  }


}
