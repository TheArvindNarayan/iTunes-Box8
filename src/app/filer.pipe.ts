import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filer',
  pure: false
})
export class FilerPipe implements PipeTransform {

  transform(posts: any[], filter: Object): any {
    if (!posts || !filter) {
        return posts;
    }
    return posts.filter(item => item.title.label.toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1);

  }
}
