import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://s2-techtudo.glbimg.com/sswBkHxGpNaBp-mfBIml7szPirs=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/p/o/nk8Ar7QuC2NgmSeXxaVg/pantera-negra-wakanda-forever-para-sempre-sinopse-elenco-trailer-filme.jpg'
  contentTitle: string = 'Notícia de Exemplo'
  contentDescription: string = 'Teste de bla bla bla bla'

  private id:string | null  = '0'


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
                            article => article.id == id
    )[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;


  }

}
