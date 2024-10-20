import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { loginGuard } from './guards/login.guard';
import { outsGuard } from './guards/outs.guard';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "pokemons", component: PokemonsComponent },
    { path: "pokemons/:id", component: PokemonComponent},
    { 
        path: "posts", 
        component: PostsComponent, 
        ...canActivate(() => redirectUnauthorizedTo(['/login'])),
        canDeactivate: [outsGuard]
    },
    { path: "todos", component: TodosComponent, canActivate: [loginGuard]},
    { path: "about", component: AboutComponent },
    { path: "products", component: ProductsComponent },
    { path: "login", component: LoginComponent },
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "**", component: Error404Component }
];
