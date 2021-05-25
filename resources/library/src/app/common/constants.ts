import {environment} from '../../environments/environment';

export const BaseUrl = environment.apiUrl;

export class Constants {
  static books = BaseUrl + `books`;
  static bookFileUpload = BaseUrl + 'books/upload';
}
