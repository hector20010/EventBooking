export interface Event {
    EventId: number,
    EventName: string,
    Description: string,
    Location: string,
    StartDate: string,
    StartTime: string,
    EndDate: string,
    EndTime: string,
    ImageUrl: string,
    Capacity: string,
    Price: number,
    OrganizerId: number,
    IsIdentityMandatory: boolean,
    IsCoupleEntryMandatory: boolean
}