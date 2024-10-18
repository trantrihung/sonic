// Hàm để chơi Plinko 20 lần
function playPlinko(times) {
  let count = 0;
  const interval = setInterval(() => {
    if (count >= times) {
      clearInterval(interval);
      console.log("Đã hoàn thành 20 lượt chơi.");
      return;
    }
    // Giả sử nút thả bóng có ID là 'drop_button'
    const playButton = Array.from(document.getElementsByTagName("button")).find(
      (btn) => btn.textContent.includes("Play")
    );
    if (playButton) {
      playButton.click();
      count++;
    } else {
      console.log("Nút PLAY không tìm thấy.");
      clearInterval(interval);
    }
  }, 10000); // Chờ 2 giây giữa mỗi lần thả bóng
}

// Gọi hàm để bắt đầu chơi
playPlinko(20);
// Tìm nút PLAY bằng cách kiểm tra thuộc tính textContent

<li role="status" aria-live="off" aria-atomic="true" tabindex="0" data-state="open" data-swipe-direction="right" class="group ui-pointer-events-auto ui-relative ui-flex ui-w-full ui-items-center ui-justify-between ui-space-x-4 ui-overflow-hidden ui-rounded-md ui-border ui-border-zinc-800 ui-p-6 ui-pr-8 ui-shadow-lg ui-transition-all data-[swipe=cancel]:ui-translate-x-0 data-[swipe=end]:ui-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:ui-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:ui-transition-none data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[swipe=end]:ui-animate-out data-[state=closed]:ui-fade-out-80 data-[state=closed]:ui-slide-out-to-right-full data-[state=open]:ui-slide-in-from-top-full data-[state=open]:sm:ui-slide-in-from-bottom-full ui-border ui-border-zinc-800 ui-bg-black" data-radix-collection-item="" style="user-select: none; touch-action: none;"><div class="grid gap-1 ui-text-white"><div class="ui-text-base ui-font-semibold">Success</div><div class="ui-text-base ui-opacity-90">2/2 Transaction confirmed</div></div><button type="button" class="ui-absolute ui-right-2 ui-top-2 ui-rounded-md ui-p-1" toast-close="" data-radix-toast-announce-exclude=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" class="ui-h-4 ui-w-4"><path fill="#71717A" fill-rule="evenodd" d="M3.578 3.578a.833.833 0 0 1 1.178 0L10 8.822l5.244-5.244a.833.833 0 0 1 1.179 1.179L11.179 10l5.244 5.244a.833.833 0 0 1-1.179 1.178L10 11.18l-5.244 5.244a.833.833 0 1 1-1.178-1.178L8.822 10 3.578 4.757a.833.833 0 0 1 0-1.179" clip-rule="evenodd"></path></svg></button></li>

<li role="status" aria-live="off" aria-atomic="true" tabindex="0" data-state="open" data-swipe-direction="right" class="group ui-pointer-events-auto ui-relative ui-flex ui-w-full ui-items-center ui-justify-between ui-space-x-4 ui-overflow-hidden ui-rounded-md ui-border ui-border-zinc-800 ui-p-6 ui-pr-8 ui-shadow-lg ui-transition-all data-[swipe=cancel]:ui-translate-x-0 data-[swipe=end]:ui-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:ui-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:ui-transition-none data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[swipe=end]:ui-animate-out data-[state=closed]:ui-fade-out-80 data-[state=closed]:ui-slide-out-to-right-full data-[state=open]:ui-slide-in-from-top-full data-[state=open]:sm:ui-slide-in-from-bottom-full ui-border ui-border-zinc-800 ui-bg-black" data-radix-collection-item="" style="user-select: none; touch-action: none;"><div class="grid gap-1 ui-text-white"><div class="ui-text-base ui-font-semibold">Awaiting</div><div class="ui-text-base ui-opacity-90">1/2 Transaction confirming...</div></div><button type="button" class="ui-absolute ui-right-2 ui-top-2 ui-rounded-md ui-p-1" toast-close="" data-radix-toast-announce-exclude=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" class="ui-h-4 ui-w-4"><path fill="#71717A" fill-rule="evenodd" d="M3.578 3.578a.833.833 0 0 1 1.178 0L10 8.822l5.244-5.244a.833.833 0 0 1 1.179 1.179L11.179 10l5.244 5.244a.833.833 0 0 1-1.179 1.178L10 11.18l-5.244 5.244a.833.833 0 1 1-1.178-1.178L8.822 10 3.578 4.757a.833.833 0 0 1 0-1.179" clip-rule="evenodd"></path></svg></button></li>


(async () => {
  // Kiểm tra xem Rabby đã được cài đặt chưa
  if (typeof window.ethereum !== 'undefined' && window.ethereum.isRabby) {
      console.log('Rabby đã được cài đặt.');

      try {
          // Yêu cầu kết nối ví Rabby
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          console.log('Đã kết nối với tài khoản:', accounts[0]);

          // Thêm mạng Sonic testnet nếu cần thiết
          const sonicTestnet = {
              chainId: '0x1F90', // Chain ID của Sonic testnet
              chainName: 'Sonic Testnet',
              nativeCurrency: {
                  name: 'Sonic Token',
                  symbol: 'SNT',
                  decimals: 18
              },
              rpcUrls: ['https://rpc.soniclabs.com'],
              blockExplorerUrls: ['https://explorer.soniclabs.com']
          };

          await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [sonicTestnet]
          });

          console.log('Đã thêm mạng Sonic testnet.');

          // Kết nối với trang web Sonic Arcade
          // Thực hiện các bước tiếp theo tùy theo yêu cầu của trang web
      } catch (error) {
          console.error('Lỗi khi kết nối ví Rabby:', error);
      }
  } else {
      console.log('Rabby chưa được cài đặt. Vui lòng cài đặt Rabby và thử lại.');
  }
})();



(async () => {
  // Hàm để chơi một ván game Mines
  async function playGame() {
      let runesFound = 0;
      const cells = document.querySelectorAll('button[data-state="unchecked"]'); // Chọn tất cả các nút chưa được kiểm tra

      for (let cell of cells) {
          if (runesFound >= 5) {
            document.querySelector("#radix-:r0:-content-manual > div > div > div > button").click();
            break;
          }
            
          cell.click();
          await new Promise(resolve => setTimeout(resolve, 5000)); // Chờ 0.5 giây giữa mỗi lần nhấp

          if (cell.getAttribute('data-state') === 'checked') {
              runesFound++;
          } else if (cell.getAttribute('data-state') === 'checked' && cell.classList.contains('mine')) {
              console.log('Đã chạm phải mìn, kết thúc ván.');
              break;
          }
      }

      console.log(`Đã mở được ${runesFound} rune trong ván này.`);
      return runesFound >= 5;
  }

  // Hàm để chơi 20 ván game Mines
  async function playMultipleGames(times) {
      for (let i = 0; i < times; i++) {
          console.log(`Bắt đầu ván thứ ${i + 1}`);
          const success = await playGame();

          if (!success) {
              console.log('Không mở đủ 5 rune, chuyển sang ván mới.');
          }

          // Chờ trang web tự động chuyển sang ván mới
          await new Promise(resolve => setTimeout(resolve, 2000)); // Chờ 2 giây trước khi bắt đầu ván mới
      }
      console.log('Đã hoàn thành 20 ván chơi.');
  }

  // Bắt đầu chơi 20 ván game Mines
  await playMultipleGames(20);
})();


// Giả sử bạn đã chọn phần tử span
const spanElement = document.querySelector("#app-layout > div.mx-auto.my-0.ui-max-w-[1140px].relative.w-full > form > div > section.wr-flex.wr-flex-shrink-0.wr-flex-col.wr-justify-between.wr-rounded-lg.wr-bg-onyx-700.wr-px-4.wr-py-3.lg:wr-py-3.lg:wr-w-[340px] > div > div > div.mb-3.flex.items-center.justify-between > div > button:nth-child(2) > span");

// Lấy nội dung text của phần tử span
const content = spanElement.textContent;

// Tách chuỗi đầu tiên trước dấu '/'
const firstString = content.split(' / ')[0];

console.log(firstString); // Kết quả sẽ là "16"






(async () => {
  // Hàm để chơi một ván game Mines
  async function playGame() {
      let runesFound = 0;
      const cells = Array.from(document.querySelectorAll('button[data-state="unchecked"]')); // Chọn tất cả các nút chưa được kiểm tra

      // Sắp xếp ngẫu nhiên các ô để giảm thiểu rủi ro
      cells.sort(() => Math.random() - 0.5);

      for (let cell of cells) {
          if (runesFound >= 5){
            document.querySelector("#radix-\\:ra\\:-content-manual > div > div > div > button").click();
            await new Promise(resolve => setTimeout(resolve, 5000));
            continue;
          } 
          cell.click();
          await new Promise(resolve => setTimeout(resolve, 5000)); // Chờ 0.5 giây giữa mỗi lần nhấp

          if (cell.getAttribute('data-state') === 'checked') {
              runesFound++;
          } else if (cell.getAttribute('data-state') === 'checked') {
              console.log('Đã chạm phải mìn, kết thúc ván.');
              continue;
          }
      }

      console.log(`Đã mở được ${runesFound} rune trong ván này.`);
      return runesFound >= 5;
  }

  // Hàm để chơi 20 ván game Mines
  async function playMultipleGames(times) {
      for (let i = 0; i < times; i++) {
          console.log(`Bắt đầu ván thứ ${i + 1}`);
          const success = await playGame();

          if (!success) {
              console.log('Không mở đủ 5 rune, chuyển sang ván mới.');
          }

          // Chờ trang web tự động chuyển sang ván mới
          await new Promise(resolve => setTimeout(resolve, 2000)); // Chờ 2 giây trước khi bắt đầu ván mới
      }
      console.log('Đã hoàn thành 20 ván chơi.');
  }

  // Bắt đầu chơi 20 ván game Mines
  await playMultipleGames(20);
})();






//** MINES **/
(async () => {

   // Hàm để chờ popup "success" xuất hiện
   async function waitForPopup(popup) {
    let successContent = null;
    const selector = "#app-layout > div.mx-auto.my-0.ui-max-w-\\[1140px\\].relative.w-full > div:nth-child(3) > ol > li"; // Selector cho phần tử chứa nội dung

    while (true) {
        successContent = document.querySelector(selector);
        if (successContent && successContent.textContent.includes(popup)) {
            console.log('Nội dung "success" đã xuất hiện.');
            break; // Thoát vòng lặp khi tìm thấy nội dung "success"
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Chờ 0.5 giây trước khi kiểm tra lại
        console.log(`đang kiểm tra lại ${popup}` )
    }
  }

  // Hàm để chơi một ván game Mines
  async function playGame() {
      let runesFound = 0;
      let cells = Array.from(document.querySelectorAll('button[data-state="unchecked"]')); // Chọn tất cả các nút chưa được kiểm tra
      const initialCellsLength = cells.length; // Lưu độ dài ban đầu của cells

      // Sắp xếp ngẫu nhiên các ô để giảm thiểu rủi ro
      cells.sort(() => Math.random() - 0.5);

      for (let cell of cells) {
          // Nếu tìm được đủ 5 rune, click nút để kết thúc ván
          if (runesFound >= 5) {
              await new Promise(resolve => setTimeout(resolve, 5000));
              console.log("lần thứ 5 done, Click GET");
              document.querySelector('button[type="submit"]').click();
              await waitForPopup("Success"); // Chờ đến khi popup "success" xuất hiện
              break;
          }

          // Nhấp vào ô hiện tại
          cell.click();
           // Kiểm tra popup "success" sau khi click
          await waitForPopup("Success"); // Chờ đến khi popup "success" xuất hiện
          await new Promise(resolve => setTimeout(resolve, 7000));
          // Kiểm tra xem trạng thái của ô sau khi nhấp
          if (cell.getAttribute('data-state') === 'checked') {
            runesFound++;
          }

          // Kiểm tra lại danh sách cells
          let newCells = Array.from(document.querySelectorAll('button[data-state="unchecked"]')); // Lấy lại danh sách cells
          if (newCells.length === initialCellsLength) {
              console.log('Không có sự thay đổi sau khi nhấp, chuyển sang ván mới.');
              break; // Kết thúc ván nếu danh sách cells không thay đổi
          } else {
              // Cập nhật danh sách cells cho các lần lặp tiếp theo
              cells = newCells;
          }
      }

      console.log(`Đã mở được ${runesFound} rune trong ván này.`);
      return runesFound >= 5;
  }

  // Hàm để chơi nhiều ván game Mines
  async function playMultipleGames(times) {
      for (let i = 0; i < times; i++) {
          console.log(`Bắt đầu ván thứ ${i + 1}`);
          const success = await playGame();

          if (!success) {
              console.log('Không mở đủ 5 rune, chuyển sang ván mới.');
          }

          // Chờ trang web tự động chuyển sang ván mới
          await new Promise(resolve => setTimeout(resolve, 2000)); // Chờ 2 giây trước khi bắt đầu ván mới
      }
      console.log('Đã hoàn thành 20 ván chơi.');
  }

  // Bắt đầu chơi nhiều ván
  await playMultipleGames(20);
})();



//** *Plinko*/
(async () => {

  // Hàm để chờ popup "success" xuất hiện
  async function waitForPopup(popup) {
   let successContent = null;
   const selector = "#app-layout > div.mx-auto.my-0.ui-max-w-\\[1140px\\].relative.w-full > div:nth-child(3) > ol > li"; // Selector cho phần tử chứa nội dung

   while (true) {
       successContent = document.querySelector(selector);
       if (successContent && successContent.textContent.includes(popup)) {
           console.log('Nội dung "success" đã xuất hiện.');
           break; // Thoát vòng lặp khi tìm thấy nội dung "success"
       }
       await new Promise(resolve => setTimeout(resolve, 1000)); // Chờ 0.5 giây trước khi kiểm tra lại
       console.log(`đang kiểm tra lại ${popup}` )
   }
 }

 // Hàm để chơi một ván game Mines
 async function playGame() {
     
         // Nếu tìm được đủ 5 rune, click nút để kết thúc ván

            document.querySelector('button[type="submit"]').click();
            await waitForPopup("Success"); // Chờ đến khi popup "success" xuất hiện
            await new Promise(resolve => setTimeout(resolve, 7000)); 
         // Nhấp vào ô hiện tại
         cell.click();
          // Kiểm tra popup "success" sau khi click
         await waitForPopup("Success"); // Chờ đến khi popup "success" xuất hiện
         await new Promise(resolve => setTimeout(resolve, 7000));
         // Kiểm tra xem trạng thái của ô sau khi nhấp
         if (cell.getAttribute('data-state') === 'checked') {
           runesFound++;
         }

         // Kiểm tra lại danh sách cells
         let newCells = Array.from(document.querySelectorAll('button[data-state="unchecked"]')); // Lấy lại danh sách cells
         if (newCells.length === initialCellsLength) {
             console.log('Không có sự thay đổi sau khi nhấp, chuyển sang ván mới.');
             break; // Kết thúc ván nếu danh sách cells không thay đổi
         } else {
             // Cập nhật danh sách cells cho các lần lặp tiếp theo
             cells = newCells;
         }
     

     console.log(`Đã mở được ${runesFound} rune trong ván này.`);
     return runesFound >= 5;
   }
   playGame();

})();




