export class MoodModel {
    id!: string;
    moodType!: MoodTypeModel;
    note!: string;
    createdDate!: string;
    modifiedDate!: string;
}

export enum MoodTypeModel {
    terrible = 1,
    bad = 2,
    notgood = 3,
    normal = 4,
    good = 5,
    great = 6,
    amazing = 7
}

export class AddMoodModel {
    moodType!: MoodTypeModel;
    note!: string;
}