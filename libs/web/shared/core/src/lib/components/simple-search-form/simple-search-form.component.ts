import { Component, OnInit } from '@angular/core';
import { EnumToArray, PropertyTypeEnum } from '@metrotenants/shared/dtos';

const options = [
  {
    value: 'Accra',
    label: 'Accra',
    children: [
      {
        value: 'North Legon',
        label: 'North Legon',
        children: [
          {
            value: 'Haatso',
            label: 'Haatso',
            isLeaf: true
          }
        ]
      },
      {
        value: 'Accra Central',
        label: 'Accra Central',
        isLeaf: true
      }
    ]
  },
  {
    value: 'East Legon',
    label: 'East Legon',
    children: [
      {
        value: 'Adenta',
        label: 'Adenta',
        children: [
          {
            value: 'Pantang',
            label: 'Pantang',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'metrotenants-simple-search-form',
  templateUrl: './simple-search-form.component.html',
  styleUrls: ['./simple-search-form.component.scss']
})
export class SimpleSearchFormComponent implements OnInit {

  nzOptions: any[] | null = null;
  values: any[] | null = null;
  propertyTypes = EnumToArray(PropertyTypeEnum);


  ngOnInit(): void {
    setTimeout(() => {
      this.nzOptions = options;
    }, 100);
  }

  onChanges(values: any): void {
    console.log(values, this.values);
  }

}
