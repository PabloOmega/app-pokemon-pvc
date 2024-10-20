import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private firestore: Firestore) { }

  getProducts() : Observable<Product[]> {
    const productsRef = collection(this.firestore, "products");
    return collectionData(productsRef, {idField: "id"}) as Observable<Product[]>;
  }
}
