import moment from "moment"

export class DateFormatter {
  static toTextDate = (date: string) => {
    return moment(date).format('LL')
  }
}