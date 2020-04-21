import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

describe('HeroService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let heroService: HeroService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HeroService,
        MessageService
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    heroService = TestBed.get(HeroService);
  });

  it('should instantiate', () => {

    expect(heroService).not.toBe(null);
  })

});
