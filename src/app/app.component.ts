import { Component } from '@angular/core';
import {TranslateService , LangChangeEvent , TranslationChangeEvent , DefaultLangChangeEvent } from "@ngx-translate/core";
import { marker } from '@biesbjerg/ngx-translate-extract-marker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// when i use -- it is describe what is function working
export class AppComponent {

 public languages:string[] = [];
 public LanguagesObjecting :any

  //******************************/marker**************************************************************//
  // --when extract the script it will watch the files ts if u marker anything on here
  // --it will  be extract this marker to file json ar , en this is match about get method , instant
  // --but this case only when u extract your folder all and the different it syntax
  // messageBoxContent: string = marker('messageport.warning.text');
  //******************************/marker**************************************************************//

  constructor(private translating: TranslateService) {
    //******************************/get***************************************************************//
    //  --loader the data form files json Languages this case we use it only on ts when we want to
    //  --This returns an Observable, and as such, is asynchronous, which guarantees that the translation file will be loaded before using the value. This Observable then completes as soon as the value is retrieved.
    // translating.get('demo.greeting', {name: 'John'}).subscribe((res: string) => {
    //   console.log(res);
    // });
    //******************************/get***************************************************************//

    //******************************/ instant*********************************************************//
    //   --the same get function but u must translated is already loaded
    //   --This is synchronous. If the translation file isn’t finished loading at the time you use this method, you won’t get a translation at all.
    // this.translating.instant('demo.testing', { name: 'John' });
    //******************************/ instant********************************************************//
    //******************************/ onLangChange***************************************************//
    //   --when u change by use function to change lang this function it will be working
    //   --return array of object Current and them Property
    // this.translating.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
    //   console.log(langChangeEvent.translations.demo.title);
    // });
    //******************************/ onLangChange***************************************************//
    //******************************/ onDefaultLangChange********************************************//
    //   --when the Default Lang it is changing do something
    //   --return array of object Current and them Property
    // this.translating.onDefaultLangChange.subscribe(
    //   (DefaultLangChangeEvent: DefaultLangChangeEvent) => {
    //     console.log(DefaultLangChangeEvent);
    //   }
    // );
    //******************************/ onDefaultLangChange********************************************//

    //******************************/ setDefaultLang*************************************************//
    //   --Sets the default language to use as a fallback. A translation is used from the default language
    //   --if no translation is found in the current language.
    // this.translating.setDefaultLang('ar');
    //******************************/ setDefaultLang*************************************************//

    //******************************/ LoopTakeValue*****************************************************//
    this.languages = ['en', 'ar'];
    //******************************/ LoopTakeValue*****************************************************//

  }


  //******************************/ useLanguage*******************************************************//
  useLanguage(language: string): void {
    // Changes the currently active language. This invokes the current loader to retrieve the translations
    //  if the language is not yet loaded.
    this.translating.use(language);
  }
  //******************************/ useLanguage*******************************************************//
}