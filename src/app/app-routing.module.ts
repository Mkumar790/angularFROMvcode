import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FzproComponent } from './fzpro/fzpro.component';
import { AboutComponent } from './fzpro/about/about.component';
import { CorporateNutritionPlanComponent } from './nutrition_package/corporate-nutrition-plan/corporate-nutrition-plan.component';
import { NutritionPackageComponent } from './fzpro/nutrition-package/nutrition-package.component';
import { BeautyComponent } from './nutrition_package/beauty/beauty.component';
import { ContactComponent } from './fzpro/contact/contact.component';
import { TeamComponent } from './fzpro/team/team.component';
import { TestimonialComponent } from './fzpro/testimonial/testimonial.component';
import { VideosComponent } from './fzpro/videos/videos.component';
import { WeightLossTrimDownComponent } from './nutrition_package/weight-loss-trim-down/weight-loss-trim-down.component';
import { GeneticNutritionComponent } from './nutrition_package/genetic-nutrition/genetic-nutrition.component';
import { InternationalCounsellingComponent } from './nutrition_package/international-counselling/international-counselling.component';
import { MedicalNutritionComponent } from './nutrition_package/medical-nutrition/medical-nutrition.component';
import { MentalNutrtionComponent } from './nutrition_package/mental-nutrtion/mental-nutrtion.component';
import { NewLifeComponent } from './nutrition_package/new-life/new-life.component';
import { NutritionKidsComponent } from './nutrition_package/nutrition-kids/nutrition-kids.component';
import { NutritionYouComponent } from './nutrition_package/nutrition-you/nutrition-you.component';
import { SportsNutritionComponent } from './nutrition_package/sports-nutrition/sports-nutrition.component';
import { WeddingBellsComponent } from './nutrition_package/wedding-bells/wedding-bells.component';
import { WeightGainComponent } from './nutrition_package/weight-gain/weight-gain.component';


const routes: Routes = [
   {
    path: 'WeightLossTrimDown',
    component: WeightLossTrimDownComponent,
  }, {
    path: 'GeneticNutrition',
    component: GeneticNutritionComponent,
  }, {
    path: 'InternationalCounselling',
    component: InternationalCounsellingComponent,
  }, {
    path: 'MedicalNutrition',
    component: MedicalNutritionComponent,
  }, {
    path: 'MentalNutrtion',
    component: MentalNutrtionComponent,
  }, {
    path: 'NewLife',
    component: NewLifeComponent,
  }, {
    path: 'NutritionKids',
    component: NutritionKidsComponent,
  }, {
    path: 'NutritionYou',
    component: NutritionYouComponent,
  },
   {
    path: 'SportsNutrition',
    component: SportsNutritionComponent,
  },
   {
    path: 'WeddingBells',
    component: WeddingBellsComponent,
  },
  
  {
    path: 'WeightGain',
    component: WeightGainComponent,
  },
  {
    path: 'Videos',
    component: VideosComponent,
  },
  {
    path: 'Testimonial',
    component: TestimonialComponent,
  },
  {
    path: 'Team',
    component: TeamComponent,
  },
  {
    path: 'NutritionPackage',
    component: NutritionPackageComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'About',
    component: AboutComponent,
  },
   {
    path: 'Beauty',
    component: BeautyComponent,
  },
  {
    path: 'CorporateNutritionPlan',
    component: CorporateNutritionPlanComponent,
  },

  {
    path: '', redirectTo: '/fzpro',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: FzproComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
