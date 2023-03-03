.horizontal_scroll_div{
  
}
asdsadsa
.horizontal_scroll_div .scroll_table_div{
  overflow-x: scroll !important;
}

.horizontal_scroll_div .scroll_table_div .table_section{
  width:1200px;
}



<div class="horizontal_scroll_div">
    <div class="scroll_table_div b">
      <div class="table_section">
      <div class="row m-l-none m-r-none " >
          <div class="col-sm-12 col-md-12 set_padding_0">
                <div class="table-responsive m-b-none no_border">
                <table class="table b-t b-b no-footer">
                  <thead class="bg-white">
                  
                  </tbody>
                  </table>
               </div>
          </div>
       </div>
  </div>
  </div>
  </div>



$( "#jangregister" ).prop('disabled', true);


<section>
    <div class="flex info">
      <div class="info-name">update props</div>
      <div class="info-code">code</div>
    </div>
    <div class="pie" data-pie='{ "percent": 75, "colorSlice": "#4CAF50", "fontColor": "#4CAF50", "colorCircle": "#f1f1f1", "fontSize": "1.4rem" }'>
    </div>
    <div class="code">
      <pre>
            <code class="language-js">&#x3C;script&#x3E;
  setInterval(() => {
    const typeFont = [100, 200, 300, 400, 500, 600, 700];
    const colorHex = `#${Math.floor((Math.random() * 0xffffff) << 0).toString(16)}`;
    const options = {
      index: 16,
      percent: Math.floor((Math.random() * 100) + 1),
      colorSlice: colorHex,
      fontColor: colorHex,
      fontSize: `${Math.floor(Math.random() * (1.4 - 1 + 1) + 1)}rem`,
      fontWeight: typeFont[Math.floor(Math.random() * typeFont.length)]
    }
    circle.animationTo(options);
  }, 3000);
&#x3C;/script&#x3E;
</code>
          </pre>
    </div>
  </section>


$("#birth_date").on("mouseenter mouseleave", function (e) {
    var dateValue = $(this).val();
    if (dateValue != "") {
      var arr_date = dateValue.split("/"); // ถ้าใช้ตัวแบ่งรูปแบบอื่น ให้เปลี่ยนเป็นตามรูปแบบนั้น
      // ในที่นี้อยู่ในรูปแบบ 00-00-0000 เป็น d-m-Y  แบ่งด่วย - ดังนั้น ตัวแปรที่เป็นปี จะอยู่ใน array
      //  ตัวที่สอง arr_date[2] โดยเริ่มนับจาก 0 
      if (e.type == "mouseenter") {
        var yearT = arr_date[2] - 543;
      }
      if (e.type == "mouseleave") {
        var yearT = parseInt(arr_date[2]) + 543;
      }
      dateValue = dateValue.replace(arr_date[2], yearT);
      $(this).val(dateValue);
    }
  });


TO_CHAR(pq.start_date  + interval '543 year', 'YYYY/MM/DD') as start_date,
TO_CHAR(pq.finish_date  + interval '543 year', 'YYYY/MM/DD') as finish_date




<select class="form-control input-xs qntype" style="width: 180px; float: left;margin: 0 4px 0 0;" data-toggle="tooltip" title="" data-original-title="Question Type">
                                    <option value="1" selected="selected">Multiple Choice Radio</option>
                                    <option value="2">Multiple Choice Checkbox</option>
                                    <option value="3">Text Input</option>
                                    <option value="31">Text Open-ended Input</option>
                                    <option value="4">Ranking</option>
                                    <option value="5">Matrix</option>
                                
                                </select>



<div style="border-bottom: 1px solid #e9ecef;position: relative;padding-left: 17px;" id="div7"><img onclick="closeFilterphone()" alt="download (4).png" pg-image-id="209de194-6cca-3e02-8bc5-fddf9ed7782a.png" src="./img/209de194-6cca-3e02-8bc5-fddf9ed7782a.png" class="img-fluid" id="img3"><label id="text5" style="display: inline-block;padding: 10px 20px 2px;font-size: 21px;font-weight: 500;cursor: pointer;" class="fonsizeHead ng-scope">ตัวกรอง<br id="br5"></label><label style="display: inline-block;padding-left: 170px;" class="fonsizeHead ng-scope label-b89b9e8ddd-responsive" id="text6">ล้าง<br id="br6"></label></div>


<style>
input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.05em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  border-color:blue;
  display: grid;
  place-content: center;
}
input[type="checkbox"]::before {
  content: "";
  width: 1em;
  height: 1em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  
  background-color: CanvasText;
  color:blue;
  transform-origin: bottom left;
  clip-path: polygon(6% 50%, 0 55%, 50% 100%, 100% 0%, 80% 30%, 43% 92%);
}


input[type="checkbox"]:checked::before {
  transform: scale(1);
  
}

</style>

{{item.status == 'reservation' || item.status == 'approve' ?item.payment_status : item.status}}



var sDate = new Date($page.State.finish_date);
sDate.toLocaleDateString('en-US') 


[{'btn-inactive': item.project_code == '06','btn-confirm': item.project_code == '05'}]

Dts@2021$

SELECT CASE
    WHEN date_part('dow',cast(now() as date)) = 1 THEN cast(cast(now() as date)+6 as date)
    WHEN date_part('dow',cast(now() as date)) = 2 THEN cast(cast(now() as date)+5 as date)
    WHEN date_part('dow',cast(now() as date)) = 3 THEN cast(cast(now() as date)+4 as date)
    WHEN date_part('dow',cast(now() as date)) = 4 THEN cast(cast(now() as date)+3 as date)
    WHEN date_part('dow',cast(now() as date)) = 5 THEN cast(cast(now() as date)+2 as date)
    WHEN date_part('dow',cast(now() as date)) = 6 THEN cast(cast(now() as date)+1 as date)
    ELSE cast(now() as date)
END AS last_week,
CASE
    WHEN date_part('dow',cast(now() as date)) = 7 THEN cast(cast(now() as date)-6 as date)
    WHEN date_part('dow',cast(now() as date)) = 6 THEN cast(cast(now() as date)-5 as date)
    WHEN date_part('dow',cast(now() as date)) = 5 THEN cast(cast(now() as date)-4 as date)
    WHEN date_part('dow',cast(now() as date)) = 4 THEN cast(cast(now() as date)-3 as date)
    WHEN date_part('dow',cast(now() as date)) = 3 THEN cast(cast(now() as date)-2 as date)
    WHEN date_part('dow',cast(now() as date)) = 2 THEN cast(cast(now() as date)-1 as date)
    ELSE cast(now() as date)
END AS start_week

function changeDdlSubDistricts($page, event) {
	const store = myScope.Store['ddlSubDistricts']['obj_sub_districts']['sub_districts']
	console.log('ddlSubDistricts ==> ',store)
  let item = store.filter(itemSub => itemSub.subdistrict_id == myScope.State.subdistrict_id);
	if(item[0]){
		myScope.State.postcode =  item[0].zip_code
	}else{
		myScope.State.postcode = ''
	}
  myScope.$apply()
}


<table class="table table-bordered" id="datatable" style="
    display: none;
"><thead id="thead2"><tr id="tr2"><th id="th2">ชื่องาน</th>
<th id="th3">ชื่อผู้ใช้งาน</th><th
 id="th4">วันที่สร้างงาน</th><th id="th5">วันที่ครบกำหนด</th><th id="th11">วันที่อนุมัติ</th>
<th  id="th12">สถานะงาน</th>
</tr></thead></table>



function mapviewhousingdetail($page, event) {
  // var latitude = parseFloat((window.myScope.Store['getDetailHousingProjectUnit'].housing_project_unit_detail_out.data.longitude)) ||13.566;
  // var longitude = parseFloat((window.myScope.Store['getDetailHousingProjectUnit'].housing_project_unit_detail_out.data.latitude)) ||100.67;
  var latitude = 13.566;
  var longitude = 100.67;
  try {
  var c_mat_no = $page.item.cl_meterial_no || 'I60010120100000029';
}
catch(err) {
  var c_mat_no = 'I60010120100000029';
}
  $(".esriMapContainer").remove();
  var app = {};
  app.map = null;
  app.toolbar = null;
  app.tool = null;
  app.symbols = null;
  app.printer = null;
  require([
                'esri/request',
                'esri/IdentityManager',
                'esri/config',
                'esri/map',
                "esri/geometry/Extent",
                "esri/SpatialReference",
                'esri/toolbars/draw',
                'esri/dijit/Print',
                'esri/layers/ArcGISTiledMapServiceLayer',
                'esri/layers/ArcGISDynamicMapServiceLayer',
                'esri/layers/LayerDrawingOptions',
                'esri/symbols/SimpleMarkerSymbol',
                'esri/symbols/SimpleLineSymbol',
                'esri/symbols/SimpleFillSymbol',
                'esri/graphic',
                'esri/renderers/ClassBreaksRenderer',
                'esri/tasks/query',
                'esri/tasks/QueryTask',
                'esri/geometry/Polygon',
                'dojo/_base/array',
                'esri/Color',
                'dojo/parser',
                'dojo/query',
                'dojo/dom',
                'dojo/dom-construct',
                'dijit/form/CheckBox',
                'dijit/form/Button',
                'dijit/layout/BorderContainer',
                'dijit/layout/ContentPane',
                'dojo/domReady!'
            ], function (
                esriRequest,
                esriId,
                esriConfig,
                Map,
                Extent,
                SpatialReference,
                Draw,
                Print,
                ArcGISTiledMapServiceLayer,
                ArcGISDynamicMapServiceLayer,
                LayerDrawingOptions,
                SimpleMarkerSymbol,
                SimpleLineSymbol,
                SimpleFillSymbol,
                Graphic,
                ClassBreaksRenderer,
                Query,
                QueryTask,
                Polygon,
                arrayUtils,
                Color,
                parser,
                query,
                dom,
                domConstruct,
                CheckBox,
                Button
            ) {
      parser.parse();

      esriId.registerToken({
        server: 'http://dhds.nha.co.th/arcgis/rest/services/NHA_NON/NHA_SMART_DYNAMIC/MapServer',
        token: 'Vnd6KDc1eeKLCXEN36kg57RhCvjvV_XM_FMVJQPpf77dVPj8xn_F6qtWzJOsSqOGdOtDrwEa0c4Iv7O-8LuPtA..',
      });


      /**
      * Token : 1 year : 21/06/2022
      * U_LOwmX6BrQ2Vw6ZaNR5Ca36pk3U_euMFhvJdwNXRcK1UV_mU1cxFqMLVDXzcyL6
      */
      var queryString = location.search;
      let params = new URLSearchParams(queryString);
      let lat = longitude;
      let lng = latitude;
      let meta = c_mat_no;
      console.log('lng:' + lng);
      console.log('lat:' + lat);
      console.log('met:' + meta);

      app.map = new Map('map', {
        basemap: 'streets-vector',
        center: [lat, lng],
        zoom: 18,
      });
      var polygonJson  = {"rings":[[[11207803.809142148,1523972.0280146298],[11207803.495987426,1523964.5718903102],[11207799.898577072,1523964.7362106314],[11207800.055259377,1523968.439405388],
      [11207796.429219935,1523968.6081759175],[11207796.552748159,1523972.2988441156],[11207803.809142148,1523972.0280146298]]],"spatialReference":{"wkid":102100 }};
      var polygon = new Polygon(polygonJson);

      var queryTask = new QueryTask("http://dhds.nha.co.th/arcgis/rest/services/NHA_NON/NHA_SMART_DYNAMIC/MapServer/11");
      var query = new Query();
      query.returnGeometry = true;
      query.geometryType = 'esriGeometryEnvelope';
      query.f = 'json';
      query.outSpatialReference = new SpatialReference(102100);;
      query.outSR =  '102100';
      query.where = "PROP_ID='"+meta+"'";
      queryTask.execute(query, showResults);
      function showResults (results) {
        polygon = new Polygon(results.features[0].geometry);
      console.log('results:'+JSON.stringify(results.features[0].geometry));
      
      if($page.item.cl_meterial_no){
        app.map.centerAt(polygon.getCentroid());
        console.log(polygon.getCentroid());
        app.map.setZoom(20);
      }
      
      addGraphics();
      } 
      
      app.map.on('load', function () {
        app.toolbar = new Draw(app.map);
        app.toolbar.on('draw-end', addToMap);
        // addGraphics();
      });
      // print map
      app.printer = new Print(
        {
          map: app.map,
          url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
        },
        dom.byId('printButton')
      );
      app.printer.startup();

      var layer = new esri.layers.ArcGISDynamicMapServiceLayer(
        'http://dhds.nha.co.th/arcgis/rest/services/NHA_NON/NHA_SMART_DYNAMIC/MapServer',
        {
          id: 'County Population',
          opacity: 1.0
        }
      );
      console.log('layer', layer);
      app.map.addLayer(layer);
      
      function addGraphics() {
          var polygonSymbol = new SimpleFillSymbol(
            SimpleFillSymbol.STYLE_SOLID, 
            new SimpleLineSymbol(
              SimpleLineSymbol.STYLE_SOLID, 
              new Color([255, 0, 0, 1]),
              3
            ), 
            new Color([255, 0, 0, 0.1])
          );
          app.map.graphics.add(new Graphic(polygon, polygonSymbol));
          console.log("adddddgrapp  >>")
      }

      function addToMap(evt) {
        app.toolbar.deactivate();
        app.map.showZoomSlider();
        var graphic = new Graphic(evt.geometry, app.symbols[app.tool]);
        app.map.graphics.add(graphic);
      }
    });
}



$('[numberformat="money"]').on('blur', function() {
  const value = this.value.replace(/,/g, '');
    if(value=='NaN' || value==''){
        this.value = 0.00
    }else{
        this.value = parseFloat(value).toLocaleString('en-US', {
    style: 'decimal',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
    }
  
});

$('[numberformat="money"]').on('keydown', function() {
  if((event.key >= 0 && event.key <= 9) || (!(this.value.includes(".")) && event.key == '.') || event.keyCode == 8 ||event.keyCode == 37 || event.keyCode == 39){
      return true
  }else{
      return false
  }
});



////////////////////////////////

$('[numberformat="only"]').on('keydown', function() {
  if((event.key >= 0 && event.key <= 9) || event.keyCode == 8 ||event.keyCode == 37 || event.keyCode == 39){
      return true
  }else{
      return false
  }
});


//////////////////////////////////

jQuery('[dateformat="th"]').datetimepicker();
jQuery.datetimepicker.setLocale('th');
jQuery('[dateformat="th"]').datetimepicker({
timepicker: false,
format: 'd/m/Y',
todayBtn: true,
lang: 'th',
onSelectDate: function (dp, $input) {
var yearT = new Date(dp).getFullYear();
var yearTH = yearT + 543;
var fulldate = $input.val();
var fulldateTH = fulldate.replace(yearT, yearTH);
$input.val(fulldateTH);
}
});
$('[dateformat="th"]').on("mouseenter mouseleave", function (e) {
var dateValue = $(this).val();
if (dateValue != "") {
var arr_date = dateValue.split("/"); // ถ้าใช้ตัวแบ่งรูปแบบอื่น ให้เปลี่ยนเป็นตามรูปแบบนั้น
// ในที่นี้อยู่ในรูปแบบ 00-00-0000 เป็น d-m-Y แบ่งด่วย - ดังนั้น ตัวแปรที่เป็นปี จะอยู่ใน array
// ตัวที่สอง arr_date[2] โดยเริ่มนับจาก 0
if (e.type == "mouseenter") {
var yearT = arr_date[2] - 543;
}
if (e.type == "mouseleave") {
var yearT = parseInt(arr_date[2]) + 543;
}
dateValue = dateValue.replace(arr_date[2], yearT);
$(this).val(dateValue);
}
});

////////////////////////////////////


$('[numberformat="money"]').on('keydown', function() {
  if((event.key >= 0 && event.key <= 9) || (!(this.value.includes(".")) && event.key == '.') || (!(this.value.includes("%")) && event.key == '%') || event.keyCode == 8 ||event.keyCode == 37 || event.keyCode == 39){
      return true
  }else{
      return false
  }
});




function checkdigit(refn1,refn2,refn3){
let c1 = [9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9];
let c2 = [7,5,7,5,7,5,7,5,7,5,7,5,7,5,7,0,0];
let c3 = [5,3,5,3,5,3,5,3,5,3,5,3,5,3,5,3,5];
var ref1 = "0"+refn1;
var ref2 = "00"+refn2+"00";
var ref3 = "0".repeat(17-refn3.length)+refn3;
let sumr1 = 0;
for (let i = 0; i < 17; i++) {
  sumr1 += (c1[i] * parseInt(ref1.substring(i,1+i))) + (c2[i] * parseInt(ref2.substring(i,1+i))) + (c3[i] * parseInt(ref3.substring(i,1+i)));
}
var chkDigit = sumr1 % 100;
return refn2+((chkDigit.toString().length==1)?"0"+chkDigit:chkDigit);
}




================== SQL =======================



(merchan_id like '%'|| ? ||'%' or merchan_id = null) and
 (product_type like '%'|| ? ||'%' or product_type = null) and
 (product_name like '%'|| ? ||'%' or product_name = null) and 
(product_category like '%'|| ? ||'%' or product_category= null) 



case when nullif(?, null) is null then true else merchan_id like '%'|| ? ||'%' end
and case when nullif(?, null) is null then true else product_type like '%'|| ? ||'%' end
and case when nullif(?, null) is null then true else product_name like '%'|| ? ||'%' end
and case when nullif(?, null) is null then true else product_category like '%'|| ? ||'%' end



SELECT report_id,permission_id,report_name,detail,url_path,view_permission,report_type,project,budget,fiscal_year,request_date,commit_date,approve_date,status,create_date,create_by,update_date,update_by
FROM report
where cast(approve_date as date) >= cast(? as date) and cast(approve_date as date) <= cast(? as date)


select
    coalesce(to_char(ea.approval_date, 'DD/MM/YYYY'), '-') as approval_date ,
    doc_no,
    case
        doc_subject
    when null then doc_no
        when '' then doc_no
        else doc_subject
    end as doc_subject,
    concat(ur."name", ' ' , ur.surname ) as name ,
    TO_CHAR(e.created_date, 'DD/MM/YYYY') as create_date,
    null as due_date ,
    ea.e_form_approver_id ,
    ea.eform_id
from
    eform_approver ea
join (
    select
        max(approval_number),
        e_form_approver_id
    from
        eform_approver
    group by
        e_form_approver_id
    ) xx on
    xx.e_form_approver_id = ea.e_form_approver_id
join eform e on
    e.eform_id = ea.eform_id
join user_register ur on
    cast(ur.refer_user_id as VARCHAR) = e.created_by
order by
    ea.approval_number



<div class="circular" id="div18"><div id="div31" class="inner"></div>
<div class="number" id="percentbar1">80%</div><div id="div33" class="circle">
<div id="div35" class="bar left"><div class="progress" id="div36"></div>
</div><div id="firsthalf1" class="bar right">
<div class="progress" id="secondhalf1"></div></div></div></div>


.circular{
  height:100px;
  width: 100px;
  position: relative;  
}
.circular .inner{
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  height: 80px;
  width: 80px;
  margin: -40px 0 0 -40px;
  background: white;
  border-radius: 100%;
}
.circular .number{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  z-index:10;
  font-size:18px;
  font-weight:500;
  color:#4158d0;
}
.circular .bar{
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f3f3f3;
  -webkit-border-radius: 100%;
  /* clip: rect(0px, 100px, 100px, 50px); */
}
.circle .bar .progress{
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-border-radius: 100%;
  clip: rect(0px, 50px, 100px, 0px);
  background: #005CAD;
}
.circle .left .progress{
  z-index:1;
  animation: left 0.2s linear both;
}
@keyframes left{
  100%{
    transform: rotate(0deg);
  }
}
.circle .right {
  transform: rotate(0deg);
  z-index:3;
 
}
.circle .right .progress{
  animation: right 0.2s linear both;
  animation-delay:0.2s;
}
@keyframes right{
  100%{
    transform: rotate(0deg);
  }
}



select *
from (select rc.reservation_id 
, concat(mt.title_name,' ', rc."name",' ',rc.surname) customer_name
, hp.project_name 
, ru.status status_code
, case 
	when ru.status = 'approve' then 'อนุมัติ'
	when ru.status = 'expire' then 'หมดอายุ'
	when ru.status = 'c_by_cus' then 'ยกเลิกโดยผู้จอง'
	when ru.status = 'c_by_nha' then 'ไม่อนุมัติ'
	when ru.status = 'reservation' then 'รออนุมัติ'
	else null
  end as status_name
, concat(hp.project_number ,' ',hp.moo ,' ',hp.soi_name ,' ',hp.street_name ,' ',hp.subdistrict ,' ',hp.district ,' ',hp.province ,' ',hp.postcode ,' ') as location_name
, ru.reservation_unit_id ,hp.housing_project_id ,rc.phone ,rc.card_no
FROM nhadt.reservation_contract rc 
left join m_title mt on rc.title_code = mt.title_code 
left join reservation_unit ru on rc.reservation_id = ru.reservation_id 
left join housing_unit hu on ru.housing_unit_id = hu.housing_unit_id 
left join housing_projects hp on hu.housing_project_id = hp.housing_project_id 
where ru.status notnull and ru.status <> ''
)tb
where CASE WHEN LOWER(?) = '' THEN true ELSE LOWER(tb.project_name) like '%' || LOWER(?) || '%' 
or (LOWER(tb.phone) like '%' || LOWER(?) || '%' ) 
or (LOWER(tb.customer_name) like '%' || LOWER(?) || '%' ) 
or (LOWER(tb.card_no) like '%' || LOWER(?) || '%' ) end
and CASE WHEN ? = '' THEN true ELSE tb.project_name = ? end
and CASE WHEN ? = '' THEN true ELSE tb.location_name = ? end
and CASE WHEN  ? = '' THEN true ELSE tb.customer_name = ? end
and CASE WHEN  ? = '' THEN true ELSE tb.status_code = ? end
order by tb.project_name asc






[{'btn-confirm': item.status == 'active'}]

{{localStorage.user_asset_role != 2471|| localStorage.user_asset_role != 2472|| localStorage.user_asset_role != 2473|| localStorage.user_asset_role != 2474|| localStorage.user_asset_role != 2475|| localStorage.user_asset_role != 2476}}


.nonefillter{
  display: none;
}

ng-repeat
item in Store['ddlPartner'].output_ddlpartner.data

and case when '' = '' then true else cast(m.register_date as date ) = CAST(NULLIF('','') AS Date) end

onkeydown="return ( event.ctrlKey || event.altKey 
                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) 
                    || (95<event.keyCode && event.keyCode<106)
                    || (event.keyCode==8) || (event.keyCode==9) 
                    || (event.keyCode>34 && event.keyCode<40) 
                    || (event.keyCode==46) )"


var link = document.createElement('link');
link.rel = 'stylesheet';
document.head.appendChild(link);
link.href = 'https://js.arcgis.com/4.11/esri/css/main.css';
var script = document.createElement('script');
script.src = 'https://js.arcgis.com/4.11/';
document.head.appendChild(script);

$( function() {
  var availableTags = code_in = {};
  $( "#project" ).autocomplete({
    source: availableTags
  });
} );

