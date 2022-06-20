
export const dateDay = (inDate) => {
        let i = new Date(inDate)
        let m = i.getMonth()
        let mth

        switch (m) {
            case 0:
                mth = "Jan";
                break;
            case 1:
                mth = "Feb";
                break;
            case 2:
                mth = "Mar";
                break;
            case 3:
                mth = "Apr";
                break;
            case 4:
                mth = "May";
                break;
            case 5:
                mth = "Jun";
                break;
            case 6:
                mth = "Jul";
                break;
            case 7:
                mth = "Aug";
                break;
            case 8:
                mth = "Sep";
                break;
            case 9:
                mth = "Oct";
                break;
            case 10:
                mth = "Nov";
                break;
            case 11:
                mth = "Dec";
                break;
        }

        const date = i.getDate()

        return date + ' ' + mth
    }


export const timeDay = (inTime) => {
        let d = new Date(inTime) 
        let m;
        if(d.getMinutes() == 0) {
            m = '00'
        } else {
            m = d.getMinutes()
        }

        return d.getHours() + ':' + m
    }
