import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class ClientUserResolver implements Resolve<any> {

  constructor(

  ) { }

  resolve(route: ActivatedRouteSnapshot) {

    // let clientUserId = route.params['clientUserId'];
    let testClientUser =   {name: 'Gonzalo Di Giovanni',
                            email: 'gonza.digiovanni@gmail.com',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ181ymQmkojMSCAhcfH7EUkuE2dsoI27PhqaqmCZs4P_UhPc2vyQh6w',
                            description: 'Estudiante de ingenieria en sistemas en la puta facultad ORT'}

    return new Promise((resolve, reject) => {

  //     this.clientUserService.getClientUser(clientUserId)
  //     .then(
  //       res => {
  //         console.log(res);
  //         return resolve({
  //           clientUser: res
  //         })
  //       },
  //       err => {
  //         console.log(err);
  //         return resolve(null)
  //       }
  //     )
      return resolve({
        clientUser : testClientUser
      })
    });
  }
}
