import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HEADERComponent } from './header/header.component';
import { FOOTERComponent } from './footer/footer.component';
import { FzproComponent } from './fzpro/fzpro.component';
import { BeautyComponent } from './nutrition_package/beauty/beauty.component';
import { SportsNutritionComponent } from './nutrition_package/sports-nutrition/sports-nutrition.component';
import { CorporateNutritionPlanComponent } from './nutrition_package/corporate-nutrition-plan/corporate-nutrition-plan.component';
import { GeneticNutritionComponent } from './nutrition_package/genetic-nutrition/genetic-nutrition.component';
import { InternationalCounsellingComponent } from './nutrition_package/international-counselling/international-counselling.component';
import { MedicalNutritionComponent } from './nutrition_package/medical-nutrition/medical-nutrition.component';
import { MentalNutrtionComponent } from './nutrition_package/mental-nutrtion/mental-nutrtion.component';
import { NewLifeComponent } from './nutrition_package/new-life/new-life.component';
import { NutritionKidsComponent } from './nutrition_package/nutrition-kids/nutrition-kids.component';
import { NutritionYouComponent } from './nutrition_package/nutrition-you/nutrition-you.component';
import { WeddingBellsComponent } from './nutrition_package/wedding-bells/wedding-bells.component';
import { WeightGainComponent } from './nutrition_package/weight-gain/weight-gain.component';
import { WeightLossTrimDownComponent } from './nutrition_package/weight-loss-trim-down/weight-loss-trim-down.component';
import { AboutComponent } from './fzpro/about/about.component';
import { ContactComponent } from './fzpro/contact/contact.component';
import { NutritionPackageComponent } from './fzpro/nutrition-package/nutrition-package.component';
import { TeamComponent } from './fzpro/team/team.component';
import { TestimonialComponent } from './fzpro/testimonial/testimonial.component';
import { VideosComponent } from './fzpro/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    FOOTERComponent,
    FzproComponent,
    BeautyComponent,
    SportsNutritionComponent,
    
    CorporateNutritionPlanComponent,
    GeneticNutritionComponent,
    InternationalCounsellingComponent,
    MedicalNutritionComponent,
    MentalNutrtionComponent,
    NewLifeComponent,
    NutritionKidsComponent,
    NutritionYouComponent,
    WeddingBellsComponent,
    WeightGainComponent,
    WeightLossTrimDownComponent,
    AboutComponent,
    ContactComponent,
    NutritionPackageComponent,
    TeamComponent,
    TestimonialComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
