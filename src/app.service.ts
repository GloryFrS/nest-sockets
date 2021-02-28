import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import * as fs from 'fs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async goParse() {
    for (let index = 118635; index > 118435; index--) {
      await this.getFile(index);
    }

    console.log('end');

    return 'Hello World!';
  }

  timeoutTT(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getFile(index) {
    await this.timeoutTT(2000);

    const fileName = `${index}.doc`;
    const url = `/get_file?razdel=teacher_materials&id=${index}&name=%D0%BA%D1%80.doc`;
    return this.httpService
      .get(url)
      .toPromise()
      .then((response) => {
        // response.data.on('data', data => console.log(data.toString().includes('нет валидной сессии')))
        response.data.pipe(fs.createWriteStream('../files/' + fileName));
      });
  }

  getAll(): string {
    return 'get all';
  }
}
