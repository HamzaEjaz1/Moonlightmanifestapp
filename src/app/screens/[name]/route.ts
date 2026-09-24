import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

const assets = join(
  process.env.USERPROFILE ?? "",
  ".cursor/projects/c-Users-shahb-OneDrive-Desktop-Moonlight-Mobile-App/assets",
);

const files: Record<string, string> = {
  "home.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_WhatsApp_Image_2026-09-23_at_12.42.38_PM-f3d55433-3909-467a-9aa4-40c223be4196.jpg",
  "creating.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_loading-b8ce13b4-e6fd-4c85-8089-8e77749ab5e0.jpg",
  "share-whisper.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_WhatsApp_Image_2026-09-23_at_12.42.39_PM-e7f90088-a8b0-4eac-9bdc-397180a099bb.jpg",
  "share-story.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_car-921d4dd4-3dbf-45c4-866a-f62a8d71a7cb.jpg",
  "story-read.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_sec-5e715f88-7b73-4f73-9207-d5105ad41a52.jpg",
  "story-listen.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_sotry-9c982cf0-143b-4414-8826-c91e188e6bfa.jpg",
  "affirmation.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_affirmation-d7a07c52-e224-47b2-8010-85039326616d.jpg",
  "player.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_aff-269eddea-60d4-4a05-a9c5-a58e706451a4.jpg",
  "affirmation-solid.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_affi-0ede5700-90ac-4ef5-a548-073b6dfb0925.jpg",
  "whisper.jpg":
    "c__Users_shahb_AppData_Roaming_Cursor_User_workspaceStorage_dbc20ab52bd1c604b45da9f13fa5b988_images_whistper-ffb109b5-aaa5-4d3a-8e8e-cde8cc1f7dc9.jpg",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const file = files[name];
  if (!file) return new NextResponse("Not found", { status: 404 });

  try {
    const buffer = await readFile(join(assets, file));
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("Image unavailable", { status: 404 });
  }
}
