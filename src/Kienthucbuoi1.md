*NPM

– NMP là viết tắt của Node package manager là một công cụ tạo và quản lý các thư viện lập trình Javascript cho Node.js. Trong cộng đồng Javascript, các lập trình viên chia sẻ hàng trăm nghìn các thư viện với các đoạn code đã thực hiện sẵn một chức năng nào đó. Nó giúp cho các dự án mới tránh phải viết lại các thành phần cơ bản, các thư viện lập trình hay thậm chí cả các framework.

-Với npm , công việc sẽ đơn giản đi rất nhiều, chúng giúp  thực hiện việc quản lý đơn giản hơn rất nhiều. Các thư viện đều có sẵn trên npm,  chạy một dòng lệnh để tải về và dễ dàng include chúng hơn.
Mỗi đoạn code này có thể phụ thuộc vào rất nhiều các mã nguồn mở khác, thật may mắn khi các công cụ quản lý thư viện ra đời, nếu không sẽ mất rất nhiều công sức trong việc quản lý các thư viện này.
Cộng đồng sử dụng npm rất lớn, hàng nghìn các thư viện được phát hành, hỗ trợ Javascript ES6, React, Express, Grunt, Duo… Hiện nay cũng đã xuất hiện thêm Yarn một công cụ tương tự npm, được Facebook phát triển với nhiều tính năng vượt trội có khả năng sẽ thay thế npm.
Nếu như  từng code Php thì sẽ biết Composer là công cụ quản lý thư viện của nó, tương tự như NPM là công cụ quản lý thư viện Javascript.
 
*Package json

-package.json là file đặc biệt, à 1 document giúp ta biết được trong cái project code này cần có những gói nào. Package.json là file cấu hình của npm, giúp cho npm hiểu nó cần phải cài đặt cái gì, thông tin về ứng dụng, phiên bản, ...
File package.json được viết bằng json
File package.json được đặt ở thư mục gốc của project.

-Các thành phần của Package.json

defination
Package.json chứa rất nhiều thông tin, thường thì ta chỉ quan tâm đến vài thuộc tính chính thôi.

name
Tên của project hoặc package, nên viết hoa cho thuộc tính name. Đây là thuộc tính bắt buộc. Ngoài ra để có thể public project, thì thuộc tính name này sẽ là package name, nên phải là duy nhất.

version
Phiên bản của project. Cách ghi version hiện nay được quy đinh bởi Semantic Versioning. Ông quy định thế này, phiên bản phải gồm 3 phần MAJOR.MINOR.PATCH Theo nguyên văn, trong đó:
* MAJOR version when you make incompatible API changes
* MINOR version when you add functionality in a backwards-compatible manner
* PATCH version when you make backwards-compatible bug fixe

description
Đoạn mô tả của project. Chú ý viết ngắn gọn xúc tích rõ ràng dễ hiểu

author
Thông tin về tác giả. 

dependencies
Trong project, sử dụng rất nhiều gói viết sẵn, chỉ cần app dụng require rồi thực hành



*jsx

JSX là gì? 
-JSX (hay Javascript XML) là sự kết hợp giữa các ngôn ngữ lập trình Javascript và các ngôn ngữ dạng dấu XML, một cú pháp giúp mở rộng và mang lại sử phổ biến cho cho ngôn ngữ Javascript viết theo kiểu XML chứ không phải là một chuỗi hay là HTML.

-JSX còn được coi là một phương tiện chuyên dụng với mục đích cung cấp các lời thay thế cho các câu lệnh trong thư viện mã nguồn mở với các cú pháp Syntactic Sugar được cung cấp.
Thêm một số những khái niệm có liên quan đến JSX cần tìm hiểu và biết đến như:
* XML (Extensible markup language) là nền tảng về ngôn ngữ được sử dụng làm mẫu và đánh dấu mở rộng trong việc tạo ra các ngôn ngữ đánh dấu khác. Nó được xem là cầu nối giúp dễ dàng hơn trong quá trình lập trình và chia sẻ thông tin.
* React: Là thư viện thuộc ngôn ngữ lập trình javascript có mã nguồn mở với mục đích chính nhằm tạo dựng và cải thiện giao diện của người dùng.
2. Cú pháp JSX
Cú pháp của JSX cũng tương tự như XML.
Ta có thẻ mở tag:
<JSXElementName JSXAttributesopt>

Đóng tag:
</JSXElementName>

Ở đây lưu ý tên của thẻ mở tag và đống tag phải giống nhau. ví dụ :
   <MyButton color="blue" shadowSize={2}>
      Click Me
    </MyButton>

Ngoài ra JSX cũng có SelfClosingElement:
<JSXElementName JSXAttributes/>

ví dụ:
<div className="sidebar" />

lưu ý : JSX không phải là HTML do đó nên cẩn thận với cú pháp của HTML.

Ví dụ trong một div element, ta định nghĩa một Class container thì ta không viết là:
<div class="container">...</div> mà phải viết là <div className="container">...</div>

(vì class là keyword của Javascript). Hoặc for trong label element thì phải viết thành htmlfor, ....
Ngoài ra HTML tag không cần đóng cũng được nhưng JSX cần thiết phải đóng tag.
<JSXElementName JSXAttributesopt>

# something here

</JSXElementName>

3. Tại sao lại nên dùng JSX
Việc sử dụng JSX trong ReactJS là không bắt buộc.  có thể sử dụng chỉ JS thuần thôi. Nhưng có rất nhiều lý do cho việc nên sử dụng JSX trong ReactJS đấy.
* Thứ nhất, JSX với cú pháp gần giống XML, cấu trúc cây khi biểu thị các attributes, điều đó giúp ta dễ dàng định nghĩa, quản lý được các component phức tạp, thay vì việc phải định nghĩa và gọi ra nhiều hàm hoặc object trong javascript. Khi nhìn vào cấu trúc đó cũng dễ dàng đọc hiểu được ý nghĩa của các component. Code JSX ngắn hơn, dễ hiểu hơn code JS.
* Thứ 2, JSX không làm thay đổi ngữ nghĩa của Javascript
* Thứ 3, với cách viết gần với các thẻ HTML, nó giúp những developers thông thường (ví dụ như các designer) có thể hiểu được một cách dễ dàng, từ đó có thể viết hoặc sửa code mà không gặp nhiều khó khăn. Ví du với đoạn code JSX như sau:
<div className="red">Children Text</div>;
<MyCounter count={3 + 5} />;

var gameScores = {
  player1: 2,
  player2: 5
};
<DashboardUnit data-index="2">
  <h1>Scores</h1>
  <Scoreboard className="results" scores={gameScores} />
</DashboardUnit>;

Code Javascipt tương đương sẽ là:
React.createElement("div", {className: "red"}, "Children Text");
React.createElement(MyCounter, {count: 3 + 5});

React.createElement(DashboardUnit, {"data-index": "2"},
  React.createElement("h1", null, "Scores"),
  React.createElement(Scoreboard, {className: "results", scores: gameScores})
);

Vậy  hiểu nên dùng jsx vì sao rồi chứ 
￼
4. Nhúng Biểu thức trong JSX
 có thể nhúng bất kỳ biểu thức JavaScript nào trong JSX bằng cách đóng nó trong dấu ngoặc nhọn. Ví dụ: 2 + 2, user.firstName, và formatName (user) là tất cả các biểu thức hợp lệ:
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

5. JSX cũng là biểu thức
Sau khi biên dịch, biểu thức JSX trở thành các đối tượng JavaScript thông thường. Điều này có nghĩa là  có thể sử dụng JSX bên trong các câu lệnh if và cho các vòng lặp, gán nó cho các biến, chấp nhận nó như các đối số, và trả về nó từ các hàm:
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

6.Thuộc tính chỉ định với JSX
 có thể sử dụng dấu ngoặc kép để xác định chuỗi literals như các thuộc tính:
const element = <div tabIndex="0"></div>;

 cũng có thể sử dụng dấu ngoặc nhọn để nhúng một biểu thức JavaScript trong một thuộc tính:
const element = <img src={user.avatarUrl}></img>;

Không đặt dấu ngoặc kép quanh dấu ngoặc nhọn khi nhúng một biểu thức JavaScript trong một thuộc tính. Nếu không, JSX sẽ coi thuộc tính là một chuỗi chữ chứ không phải là một biểu thức.  nên sử dụng dấu ngoặc kép (cho giá trị chuỗi) hoặc dấu ngoặc nhọn (cho các biểu thức), nhưng không phải cả hai trong cùng một thuộc tính.
7. Chỉ định children với JSX
Nếu một thẻ trống, có thể đóng nó lại ngay lập tức với />, như XML:
const element = <img src={user.avatarUrl} />;

JSX có thể chứa children
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);




*Type Script

TypeScript là gì?
-TypeScript là một dự án mã nguồn mở được phát triển bởi Microsoft, nó có thể được coi là một phiên bản nâng cao của Javascript bởi việc bổ sung tùy chọn kiểu tĩnh và lớp hướng đối tượng mà điều này không có ở Javascript. TypeScript có thể sử dụng để phát triển các ứng dụng chạy ở client-side (Angular2) và server-side (NodeJS).

-TypeScript sử dụng tất cả các tính năng của của ECMAScript 2015 (ES6) như classes, modules. Không dừng lại ở đó nếu như ECMAScript 2017 ra đời thì mình tin chắc rằng TypeScript cũng sẽ nâng cấp phiên bản của mình lên để sử dụng mọi kỹ thuật mới nhất từ ECMAScript. Thực ra TypeScript không phải ra đời đầu tiên mà trước đây cũng có một số thư viện như CoffeScript và Dart được phát triển bởi Google, tuy nhiên điểm yếu là hai thư viện này sư dụng cú pháp mới hoàn toàn, điều này khác hoàn toàn với TypeScript, vì vậy tuy ra đời sau nhưng TypeScript vẫn đang nhận được sự đón nhận từ các lập trình viên.
Tại sao nên sử dụng TypeScript?
* Dễ phát triển dự án lớn: Với việc sử dụng các kỹ thuật mới nhất và lập trình hướng đối tượng nên TypeScript giúp chúng ta phát triển các dự án lớn một cách dễ dàng.
* Nhiều Framework lựa chọn: Hiện nay các Javascript Framework đã dần khuyến khích nên sử dụng TypeScript để phát triển, ví dụ như AngularJS 2.0 và Ionic 2.0.
* Hô trợ các tính năng của Javascript phiên bản mới nhất: TypeScript luôn đảm bảo việc sử dụng đầy đủ các kỹ thuật mới nhất của Javascript, ví dụ như version hiện tại là ECMAScript 2015 (ES6).
* Là mã nguồn mở: TypeScript là một mã nguồn mở nên  hoàn toàn có thể sử dụng mà không mất phí, bên cạnh đó còn được cộng đồng hỗ trợ.
* TypeScript là Javscript: Bản chất của TypeScript là biên dịch tạo ra các đoạn mã javascript nên ban có thê chạy bất kì ở đâu miễn ở đó có hỗ trợ biên dịch Javascript. Ngoài ra có thể sử dụng trộn lẫn cú pháp của Javascript vào bên trong TypeScript, điều này giúp các lập trình viên tiếp cận TypeScript dễ dàng hơn.


