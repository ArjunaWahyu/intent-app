import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';


class Gedung {
  kodeGedung: string = '';
  namaGedung: string = '';
  kapasitas: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  async store(key: string, value: any) {
    // const encryptedValue = btoa(escape(JSON.stringify(value)));
    // return await this.storage.set(key, encryptedValue);
    return await this.storage.set(key, value);
  }

  getStorage() {
    return this.storage;
  }

  async getAllGedung(): Promise<Gedung[]> {
    let gedungs = new Array<Gedung>();
    await this.storage.forEach((value, key, index) => {
      let gedung = new Gedung();
      gedung.kodeGedung = value.kodeGedung;
      gedung.namaGedung = value.namaGedung;
      gedung.kapasitas = value.kapasitas;
      gedungs.push(gedung);
    });
    return gedungs;
  }

  // get gedung by id
  async getGedungById(id: string): Promise<Gedung> {
    let gedung = new Gedung();
    await this.storage.get(id).then((value) => {
      gedung.kodeGedung = value.kodeGedung;
      gedung.namaGedung = value.namaGedung;
      gedung.kapasitas = value.kapasitas;
    });
    return gedung;
  }

  async get(key: string) {
    return new Promise((resolve, reject) => {
      this.storage.get(key).then((value) => {
        if (value) {
          // resolve(JSON.parse(unescape(atob(value))));
          resolve(value);
        } else {
          resolve(null);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  }

  getSize(){
    let datas = this.storage.keys();
    console.log(datas);
  }

  async update(key: string, value: any) {
    return await this.store(key, value);
  }

  async remove(key: string) {
    await this.storage.remove(key);
  }

  async clear() {
    await this.storage.clear();
  }
}
