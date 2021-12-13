def persian_number_conventer(mystr):
    number = {
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹"

    }
    for e, p in number.items():
        mystr = mystr.replace(e, p)
    return mystr