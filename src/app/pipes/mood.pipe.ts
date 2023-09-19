import { Pipe, PipeTransform } from "@angular/core";
import { MoodTypeModel } from "../models/mood.model";

@Pipe({
    name: 'mood'
})
export class MoodPipe implements PipeTransform {
    transform(value: MoodTypeModel, ...args: any[]) {
        switch(value) {
            case MoodTypeModel.terrible:
                return 'terrible';
            case MoodTypeModel.bad:
                return 'bad';
            case MoodTypeModel.notgood:
                return 'notgood';
            case MoodTypeModel.normal:
                return 'normal';
            case MoodTypeModel.good:
                return 'good';
            case MoodTypeModel.great:
                return 'great';
            case MoodTypeModel.amazing:
                return 'amazing';
        }
    }
}