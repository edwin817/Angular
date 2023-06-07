import { Component,Input,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-std',
  templateUrl: './add-std.component.html',
  styleUrls: ['./add-std.component.css']
})
export class AddStdComponent {

  constructor(private service:SharedService){}

  @Input() std:any;
  studentid:any;
  studentname:any;
  studentage:any;
  studentplace:any;

  ngOnInit():void{
    this.studentid=this.std.studentid;
    this.studentname=this.std.studentname;
    this.studentage=this.std.studentage;
    this.studentplace=this.studentplace;
  }

  savestudent(){
    var val ={
      studentid:this.studentid,
      studentname:this.studentname,
      studentage:this.studentage,
      studentplace:this.studentplace
    }
    this.service.Addnewstd(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updatestudent(){
    var val ={
      studentid:this.studentid,
      studentname:this.studentname,
      studentage:this.studentage,
      studentplace:this.studentplace
    }
    this.service.Updatestd(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
