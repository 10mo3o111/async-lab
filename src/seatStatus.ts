export async function fetchDataFromJson(e: MouseEvent) {
  try {
    const response = await fetch("../data.json");
    if (!response.ok) {
      throw new Error("ネットワークエラー: データが取得できませんでした。");
    }

    const data: { id: string; crowded: string }[] = await response.json();

    const but = e.target as HTMLElement;

    if (!but) return;
    const butnId = but.id;

    const selectData = data.find((value) => {
      return value.id === butnId;
    });

    if (selectData?.crowded === "yes") {
      but.classList.toggle("is_crowded");
      if (but.classList.contains("is_crowded")) {
        but.textContent = "残席わずか";
      } else {
        but.textContent = "空き席状況を確認";
      }
    }
    if (selectData?.crowded === "no") {
      but.classList.toggle("is_free");
      if (but.classList.contains("is_free")) {
        but.textContent = "お席あります";
      } else {
        but.textContent = "空き席状況を確認";
      }
    }
  } catch (err) {
    console.error("データ取得エラー:", err);
  }
}
