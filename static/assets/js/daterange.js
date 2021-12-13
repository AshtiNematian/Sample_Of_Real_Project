//////Date range as a button
//	$('#daterange-btn').daterangepicker({
//		ranges: {
//			'Today': [moment(), moment()],
//			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//			'This Month': [moment().startOf('month'), moment().endOf('month')],
//			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//		},
//
//		startDate: moment().subtract(29, 'days'),
//		endDate: moment()
//	}, function(start, end) {
//		$('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
//	})
// $("jQuerySelectQuery").persianDatepicker({
//        months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
//        dowTitle: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
//        shortDowTitle: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
//        showGregorianDate: !1,
//        persianNumbers: !0,
//        formatDate: "YYYY/MM/DD",
//        selectedBefore: !1,
//        selectedDate: null,
//        startDate: null,
//        endDate: null,
//        prevArrow: '\u25c4',
//        nextArrow: '\u25ba',
//        theme: 'default',
//        alwaysShow: !1,
//        selectableYears: null,
//        selectableMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//        cellWidth: 25, // by px
//        cellHeight: 20, // by px
//        fontSize: 13, // by px
//        isRTL: !1,
//        calendarPosition: {
//            x: 0,
//            y: 0,
//        },
//        onShow: function () {},
//        onHide: function () {},
//        onSelect: function () {},
//        onRender: function () {}
//    });