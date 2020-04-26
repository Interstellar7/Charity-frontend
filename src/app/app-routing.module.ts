import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
    data: {
      title: 'Home'
    }
  },
  {
    path: '',
    loadChildren: () => import('./pages/auth-page/auth-page.module').then(m => m.AuthPageModule),
    data: {
      title: ''
    }
  },

  {
    path: 'users',
    loadChildren: () => import('./pages/users-page/users-page.module').then(m => m.UsersPageModule),
    data: {
      title: 'Users'
    }
  },

    {
      path: 'ads',
      loadChildren: () => import('./pages/ads-page/ads-page.module').then(m => m.AdsPageModule),
      data: {
        title: 'Объявления'
      }
    },
    {
      path: 'cabinet',
      loadChildren: () => import('./pages/cabinet-page/cabinet-page.module').then(m => m.CabinetPageModule),
      data: {
        title: 'Мой кабинет'
      }
    },
  {
    path: '**',
    loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule),
    data: {
      title: 'Not found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
